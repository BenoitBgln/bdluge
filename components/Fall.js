import { use, useEffect, useRef, useState } from 'react';
import { Engine, Render, Bodies, World, Runner } from 'matter-js'

export default function Fall({ }) {
    const scene = useRef()
    const parent = useRef()
    const floor = useRef();
    const engine = useRef(Engine.create())

    useEffect(() => {
        document.addEventListener('click', handleClick);

        const cw = document.body.getBoundingClientRect().width
        const ch = document.body.getBoundingClientRect().height

        const engineRef = engine.current;
        const render = Render.create({
            element: parent.current,
            canvas: scene.current,
            engine: engineRef,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent'
            }
        })
        floor.current = Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true, render: { fillStyle: "red" } });
        World.add(engine.current.world, [
            floor.current,
            Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true, render: { fillStyle: "transparent" } }),
            Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true, render: { fillStyle: "transparent" } }),
            Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true, render: { fillStyle: "transparent" } })
        ])

        Runner.run(engine.current)
        Render.run(render)

        return () => {
            document.removeEventListener('click', handleClick);
            Render.stop(render)
            World.clear(engineRef.world)
            Engine.clear(engineRef)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
        }
    }, [])

    const handleClick = e => {
        // scene.current.height = document.body.getBoundingClientRect().height;
        // floor.current.position.y =  500;
        // console.log(document.body.getBoundingClientRect().height, floor.current.position.y  )
        const isOscillo = Math.random() > .2;
        // console.log(scene.current)   
        console.log(scene.current.getBoundingClientRect().height - document.body.getBoundingClientRect().height)

        const o = Bodies.rectangle(
            e.pageX,
            e.pageY + scene.current.getBoundingClientRect().height - document.body.getBoundingClientRect().height,
            isOscillo ? 200 : 50,
            isOscillo ? 104 : 87,
            {
                mass: 10,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite: {
                        texture: isOscillo ? '/images/oscillo.png' : '/images/florent.png',
                    }
                }
            })
        World.add(engine.current.world, [o])
    }
    return (
        <>
            {
                <div ref={parent}>
                    <canvas ref={scene}
                        style={{
                            zIndex: 20,
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            pointerEvents: "none"
                        }} />
                </div>
            }
        </>
    )
}