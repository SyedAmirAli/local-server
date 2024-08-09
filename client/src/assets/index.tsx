export default {
    svg: {
        close: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M368 368L144 144M368 144L144 368"
                    />
                </svg>
            );
        },

        home: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
                </svg>
            );
        },

        profile: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={width}
                    height={height}
                    viewBox="0 0 448 512"
                >
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
            );
        },

        setting: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                </svg>
            );
        },

        xMark: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
            );
        },

        checkOutline: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M416 128L192 384l-96-96"
                    />
                </svg>
            );
        },

        edit: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                </svg>
            );
        },

        team: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                >
                    <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                </svg>
            );
        },

        send: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 25 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M23.5492 0.262625C24.0227 0.590682 24.2711 1.15775 24.182 1.72482L21.182 21.2208C21.1117 21.6754 20.8351 22.0737 20.432 22.2987C20.0289 22.5236 19.546 22.5518 19.1195 22.3737L13.5131 20.0445L10.3021 23.5172C9.88495 23.9718 9.22869 24.1217 8.65212 23.8968C8.07555 23.6718 7.70054 23.1141 7.70054 22.4955V18.5776C7.70054 18.3901 7.77085 18.212 7.89742 18.0761L15.7538 9.50446C16.0257 9.20921 16.0163 8.75462 15.735 8.47342C15.4538 8.19223 14.9991 8.17349 14.7038 8.44062L5.16925 16.9092L1.03012 14.8377C0.533242 14.5893 0.214487 14.0926 0.200424 13.5396C0.186361 12.9866 0.476991 12.471 0.955123 12.1945L21.9554 0.197013C22.457 -0.0888649 23.0758 -0.0607457 23.5492 0.262625Z"></path>
                </svg>
            );
        },

        loading: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                </svg>
            );
        },

        circleExclamation: function (
            width: number,
            height?: number
        ): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
            );
        },

        menu3dots: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 512"
                >
                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
            );
        },

        trash: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                </svg>
            );
        },

        logout: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
            );
        },

        menu: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            );
        },

        circlePlus: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg>
            );
        },

        homeUser: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
                </svg>
            );
        },

        eye: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width={width}
                    height={height}
                >
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
            );
        },

        eyeSlash: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={width}
                    height={height}
                    viewBox="0 0 640 512"
                >
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                </svg>
            );
        },

        commentDots: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>
            );
        },

        rocketChat: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                >
                    <path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z" />
                </svg>
            );
        },

        search: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            );
        },

        chevron: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
            );
        },

        download: function (width: number, height?: number): JSX.Element {
            if (!width && !height) {
                width = 24;
                height = 24;
            }

            if (Number(width) && !Number(height)) {
                height = width;
            }

            return (
                <svg
                    width={width}
                    height={height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                >
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 134.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                </svg>
            );
        },
    },
};
