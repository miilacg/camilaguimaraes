/* esse arquivo é carregado apenas uma vez */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
               <Head>                  
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />    
                  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />   
                  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />   
                  <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet" />   

                  <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
                  <title>Camila Guimarães | Desenvolvedora</title>
               </Head>

               <body>
                  <Main />
                  <NextScript />
               </body>
         </Html>            
      );
   }
} 