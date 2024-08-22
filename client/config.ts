interface Config{
    baseURL:string
}
const checkConfig=(server:string): Config | {} => {
    let config: Config | {} = {};
    switch (server){
        case "production":
            config = {
                baseURL: "https://blink-basket.vercel.app",

            };
            break;
            case 'local':
                config={
                    baseURL: 'http://localhost:9000',

                };
                break;
                default: 
                break;
    }
    return config
}
export const selectServer = 'production'
export const config = checkConfig(selectServer) as Config;