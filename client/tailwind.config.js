export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/**/*.blade.php',
        './resources/**/*.{js,jsx,ts,tsx}',
        './resources/**/*.vue',
        './src/**/*.{html,js,jsx,ts,tsx}',
    ],

    theme: {
        extend: {
            width: additionalWidthPercentage(),
            backgroundImage: {
                'purple-lg':
                    'linear-gradient(to bottom right, #B54FF3, #6366f1)',
                'purple-lg-opacity-50':
                    'linear-gradient(to bottom right, #B54FF350, #6366f150)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops));',
            },
            fontSize: {
                md: '17px',
            },
            fontFamily: {
                oswald: '"Oswald", sans-serif',
                mono: '"Roboto Mono", sans-serif',
                poppins: '"Poppins", sans-serif',
                jockey: '"Jockey One", sans-serif',
                comfortaa: '"Comfortaa", sans-serif',
                primary: '"Comfortaa", sans-serif',
            },
            colors: {
                primary: '#009E91',
                secondary: '#0D3896',
                info: '#FFCD05',
                'btn-primary': '#88B7A4',
                'primary-light': 'rgb(1 152 219 / 14%)',
                'primary-lite': 'rgba(0, 158, 145, 0.1)',
                'primary-outline': '#bbbdf1',
                'violet-80': '#3d2e7c',
                'gray-90': '#2b1c50',
                'yellow-gold': 'hsl(45, 100%, 72%)',
                gold: 'hsl(45, 54%, 58%)',
            },
            boxShadow: {
                main: '-2px 1px 10px 2px rgba(138, 138, 138, 0.3)',
                'primary-deep': '8px 12px 22px 4px rgb(1 152 219 / 14%)',
                nav: '0 0 0 10px #161616, 0px 2px 0px 9px #ffdb70',
                'nav-b': '0 0 0 10px #161616, 0px -2px 0px 9px #ffdb70',
            },
            minHeight: measurement(),
            maxHeight: measurement(),
            maxWidth: measurement(),
            minWidth: measurement(),
            dropShadow: {
                primary: '0px 0px 15px #009E91',
                secondary: '0px 0px 15px rgba(13, 56, 150, 0.3)',
            },
        },

        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1200px',
                xl: '1440px',
                '2xl': '1600px',
            },
        },

        'container-sm': {
            center: true,
            padding: '1rem',
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1200px',
                xl: '1440px',
                '2xl': '1600px',
            },
        },

        screens: {
            m: '320px',
            xs: '444px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
};

function additionalWidthPercentage() {
    return {
        '1/100': '1%',
        '2/100': '2%',
        '3/100': '3%',
        '4/100': '4%',
        '5/100': '5%',
        '6/100': '6%',
        '7/100': '7%',
        '8/100': '8%',
        '9/100': '9%',
        '10/100': '10%',
        '11/100': '11%',
        '12/100': '12%',
        '13/100': '13%',
        '14/100': '14%',
        '15/100': '15%',
        '16/100': '16%',
        '17/100': '17%',
        '18/100': '18%',
        '19/100': '19%',
        '20/100': '20%',
        '21/100': '21%',
        '22/100': '22%',
        '23/100': '23%',
        '24/100': '24%',
        '25/100': '25%',
        '26/100': '26%',
        '27/100': '27%',
        '28/100': '28%',
        '29/100': '29%',
        '30/100': '30%',
        '31/100': '31%',
        '32/100': '32%',
        '33/100': '33%',
        '34/100': '34%',
        '35/100': '35%',
        '36/100': '36%',
        '37/100': '37%',
        '38/100': '38%',
        '39/100': '39%',
        '40/100': '40%',
        '41/100': '41%',
        '42/100': '42%',
        '43/100': '43%',
        '44/100': '44%',
        '45/100': '45%',
        '46/100': '46%',
        '47/100': '47%',
        '48/100': '48%',
        '49/100': '49%',
        '50/100': '50%',
        '51/100': '51%',
        '52/100': '52%',
        '53/100': '53%',
        '54/100': '54%',
        '55/100': '55%',
        '56/100': '56%',
        '57/100': '57%',
        '58/100': '58%',
        '59/100': '59%',
        '60/100': '60%',
        '61/100': '61%',
        '62/100': '62%',
        '63/100': '63%',
        '64/100': '64%',
        '65/100': '65%',
        '66/100': '66%',
        '67/100': '67%',
        '68/100': '68%',
        '69/100': '69%',
        '70/100': '70%',
        '71/100': '71%',
        '72/100': '72%',
        '73/100': '73%',
        '74/100': '74%',
        '75/100': '75%',
        '76/100': '76%',
        '77/100': '77%',
        '78/100': '78%',
        '79/100': '79%',
        '80/100': '80%',
        '81/100': '81%',
        '82/100': '82%',
        '83/100': '83%',
        '84/100': '84%',
        '85/100': '85%',
        '86/100': '86%',
        '87/100': '87%',
        '88/100': '88%',
        '89/100': '89%',
        '90/100': '90%',
        '91/100': '91%',
        '92/100': '92%',
        '93/100': '93%',
        '94/100': '94%',
        '95/100': '95%',
        '96/100': '96%',
        '97/100': '97%',
        '98/100': '98%',
        '99/100': '99%',
        '100/100': '100%',
    };
}

function measurement() {
    return {
        ...additionalWidthPercentage(),
        0: '0px',
        px: '1px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        auto: 'auto',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        full: '100%',
        screen: '100vh',
        svh: '100svh',
        lvh: '100lvh',
        dvh: '100dvh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
    };
}
