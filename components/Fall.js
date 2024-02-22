import { useEffect, useRef, useState } from 'react';
import { Engine, Render, Bodies, World, Runner } from 'matter-js'

export default function Fall({ }) {
    const scene = useRef()
    const engine = useRef(Engine.create())

    // const [height, setHeight] = useState();
    // const updateDimensions = () => {
    //     setHeight(document.body.scrollHeight);
    // }
    // useEffect(() => {
    //     window.addEventListener("resize", updateDimensions);
    //     return () => window.removeEventListener("resize", updateDimensions);
    // }, []);

    useEffect(() => {
        document.addEventListener('click', handleClick);

        const cw = document.body.clientWidth
        const ch = document.body.clientHeight

        const engineRef = engine.current;
        const render = Render.create({
            element: scene.current,
            engine: engineRef,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent'
            }
        })

        World.add(engine.current.world, [
            Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true, render: { fillStyle: "transparent" } }),
            Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true, render: { fillStyle: "transparent" } }),
            Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true, render: { fillStyle: "transparent" } }),
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
        const isOscillo = Math.random() > .2;

        const o = Bodies.rectangle(
            e.pageX,
            e.pageY,
            isOscillo ? 200 : 31,
            isOscillo ? 104 : 90,
            {
                mass: 10,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite: {
                        texture: isOscillo ? '/images/oscillo.png' : '/images/small_pils.png',
                    }
                }
            })
        World.add(engine.current.world, [o])
    }

    return (
        <div
            ref={scene}
            className="fallContainer"
            style={{
                // height: height,
                // overflow: 'hidden',
                zIndex: 20,
                position: "absolute",
                pointerEvents: "none"
            }}
        />
    )
}