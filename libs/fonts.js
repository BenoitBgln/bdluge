import localFont from 'next/font/local';

export const gobold = localFont({
    src: [
        {
            path: '../public/fonts/Gobold Regular.otf',
            weight: '400',
            style: 'normal',
        }
    ],
});

export const berlingskeSerif = localFont({
    src: [
        {
            path: '../public/fonts/BerlingskeSerif-Regular.ttf',
            weight: '400',
            style: 'normal',
        }
    ],
});

export const colusRegular = localFont({
    src: [
        {
            path: '../public/fonts/Colus-Regular.woff',
            weight: '400',
            style: 'normal',
        }
    ],
});

export const delaGothicOne = localFont({
    src: [
        {
            path: "../public/fonts/DelaGothicOne-Regular.ttf",
            weight: '400',
            style: "normal"
        }
    ]
})