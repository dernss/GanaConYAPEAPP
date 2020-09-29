export class GanaConYAPE{
        colaborador: {
                tipoDocumento: number;
                numeroDocumento: string;  // dni colaborador 2
                fechaEmision: Date;
                usuario: string;
        }

        cliente: {
                 tipoDocumento: number;
                 numeroDocumento: string;  // dni colaborador 2
                 cliente: string; // dni cliente 1
                 nombres: string;
                 apellidoPaterno: string;
                 apellidoMaterno: string;
                 telefono: string;
                 correoElectronico: string;
                 condicion: number;
                 recaptchaResponse: string;
        }
}


// export class Colaborador{
//         public tipoDocumento: number;
//         public numeroDocumento: string;  // dni colaborador 2
//         public fechaEmision: Date;
//         public usuario: string;
// }

// export class Cliente{
//         public tipoDocumento: number;
//         public numeroDocumento: string;  // dni colaborador 2
//         public cliente: string; // dni cliente 1
//         public nombres: string;
//         public apellidoPaterno: string;
//         public apellidoMaterno: string;
//         public telefono: string;
//         public correoElectronico: string;
//         public condicion: number;
//         public recaptchaResponse: string;

// }

/*
{
 "colaborador":{
  "tipoDocumento":1,
  "numeroDocumento": "70820719",
  "usuario": "nrde",
  "fechaEmision": "17/01/2018"
    },

  "cliente":{
  "tipoDocumento":1,
  "numeroDocumento": "46781374",
  "nombres": "a",
  "apellidoPaterno": "b",
  "apellidoMaterno": "c",
  "correoElectronico": "adb@hotmail.com",
  "telefono": "984398035",
  "condicion": "1",
  "recaptchaResponse": "03AGdBq26yI_hURMjs9-NIOd9mGWv8MHUdTXRjrLV_oIHQgyTxHePzDwDNOIVsRdNRt4FouWUlIB1Nmki-W3aJw0j8FmanceYoL70rPMKeiz9__frW0QtciMQwTufxDj1KAS-5YjjVT6b67_h6TgKSLUaeFPS8BRzDpF4l2qXfS7DpETq0K1UWUdXYSRJWiM60gqknTQ5ufFmzUSO7O9Q09muS3RIlVUzcN0x85G-rLf1LQSFMCFRM2oD65hBcX4ciVQVPb386FoxwMtrkBGjgLtrjpcjJHiOJE-jxPybD8rwseSygkeDgU8HNsUIAY-x7WWeTpphwmYAMNaeD84HHjejqPDiHfdr1fwqOOpzHnrSEc6zDm3tE9BLke9rx8mMBZicZOAHydg2pceis2_2_36-Es0m1IgtRJNEUPqfXOQy3kOhs0s_-9Ug"
    }
}   

*/