const itemsData = [
  // {
  //   id: '1',
  //   name: 'NVF Blank Template',
  //   adultPrice: '$95.56',
  //   youthPrice: '$91.11',
  //   frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
  //   sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey_left9cd8d3f2e0ff/thumbnail.jpg',
  //   customizeLink: '',
  //   className: 'sublimated nvf-sublimated-jersey men',
  //   isNew: true,
  //   modelPath: '/t_shirt.glb',
  //   materials: [
  //     {
  //       name: 'Body_FRONT_2664',
  //       color: '#3F1D1D',
  //       title: 'Front/Back Color'
  //     },
  //     {
  //       name: 'Sleeves_FRONT_2669',
  //       color: '#FFFFFF',
  //       title: 'Sleeves Color'
  //     }
  //   ],
  //   scale: [4, 4, 4],
  //   fov: 50
  // },
  //  {
  //   id: '2',
  //   name: 'AK',
  //   adultPrice: '$95.56',
  //   youthPrice: '$91.11',
  //   frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/ak_267_nvf-sublimated-jerseyd7b3690c8c9f/thumbnail.jpg',
  //   sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/ak_267_nvf-sublimated-jersey_leftd7b3690c8c9f/thumbnail.jpg',
  //   customizeLink: '',
  //   className: 'sublimated nvf-sublimated-jersey men',
  //   isNew: false,
  //   modelPath: '/white_shirts.glb',
  //   materials: [
  //     {
  //       name: 'Cotton_Gabardine_FRONT_2673',
  //       color: '#ff0000', // Default red color
  //       title: 'Cotton Front Color' // Title for this material
  //     },
  //     {
  //       name: 'Cotton_Gabardine_FRONT_2673_0',
  //       color: '#000000', // Default white color
  //       title: 'Cotton Back Color' // Title for this material
  //     },
  //     {
  //       name: 'Cotton_Gabardine_FRONT_2673_1',
  //       color: '#000000', // Default white color
  //       title: 'Cotton Left Slavee' // Title for this material
  //     },
  //     {
  //       name: 'Cotton_Gabardine_FRONT_2673_2',
  //       color: '#000000', // Default white color
  //       title: 'Cotton Right Salvee' // Title for this material
  //     },
  //     {
  //       name: 'Cotton_Gabardine_FRONT_2673_3',
  //       color: '#000000', // Default white color
  //       title: 'Cotton_Gabardine_FRONT_2673_3' // Title for this material
  //     },
  //     {
  //       name: 'Cotton_Gabardine_FRONT_2673_4',
  //       color: '#000000', // Default white color
  //       title: 'Cotton_Gabardine_FRONT_2673_4' // Title for this material
  //     },
  //     {
  //       name: 'Cotton_Gabardine_FRONT_2673_5',
  //       color: '#000000', // Default white color
  //       title: 'Cotton_Gabardine_FRONT_2673_5' // Title for this material
  //     },
  //     {
  //       name: 'Cotton_Gabardine_FRONT_2673_6',
  //       color: '#ffffff', // Default white color
  //       title: 'Cotton_Gabardine_FRONT_2673_6' // Title for this material
  //     },
   
  //     {
  //       name: 'PT_FABRIC_FRONT_32035',
  //       color: '#000000', // Default white color
  //       title: 'FRONT logo' // Title for this material
  //     },
  //     {
  //       name: 'Rib_1X1_319gsm_FRONT_2664',
  //       color: '#FFFFFFF', // Default white color
  //       title: 'RIB' // Title for this material
  //     },
  //     {
  //       name: 'Rib_1X1_319gsm_FRONT_2664_0',
  //       color: '#FFFFFF', // Default white color
  //       title: 'RIB INSIDE' // Title for this material
  //     }
     
  //   ],
  //    scale: [4,4,4],
  //    fov:50
  // },

  // Add more items as needed
//   {
//     id: '29',
//     name: 'Custom Football-Shirt',
//     adultPrice: '$15.56',
//     youthPrice: '$20.11',
//     frontImageSrc: 'htt://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
//     sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey_left9cd8d3f2e0ff/thumbnail.jpg',
//     customizeLink: '',
//     className: 'sublimated nvf-sublimated-jersey men',
//         isNew: true,
//     modelPath: '/newdesign.glb',
//     // modelPath: '/white_shirts.glb',
//     materials: [
//       {
//         name: 'Back_Upper_FRONT_34478.001',
//         color: '#D3D3D3', // Light Gray
//         title: 'Back Upper'
//       },
//       {
//         name: 'Collor_FRONT_34493.001',
//         color: '#FFD700', // Gold
//         title: 'Collar'
//       },
//       {
//         name: 'Material38303.001',
//         color: '#1E90FF', // Dodger Blue
//         title: 'Main Material'
//       },
//       {
//         name: 'Material.004',
//         color: '#FF4500', // Orange Red
//         title: 'Additional Material 004'
//       },
//       {
//         name: 'Material.006',
//         color: '#228B22', // Forest Green
//         title: 'Additional Material 006'
//       },
//       {
//         name: 'Material.007',
//         color: '#8B0000', // Dark Red
//         title: 'Front AZ'
//       },
//       {
//         name: 'Material.008',
//         color: '#00008B', // Dark Blue
//         title: 'Front Number'
//       },
//       {
//         name: 'Shirt Bottom_FRONT_34487.001',
//         color: '#A52A2A', // Brown
//         title: 'Shirt Bottom'
//       },
//       {
//         name: 'shirt Side_FRONT_3114.OO1',
//         color: '#808080', // Gray
//         title: 'Shirt Side'
//       },
//       {
//         name: 'Strip 1_FRONT_11811510.001',
//         color: '#FFDAB9', // Peach Puff
//         title: 'Strip 1'
//       },
//       {
//         name: 'Strip 2_FRONT_11811513.001',
//         color: '#7FFF00', // Chartreuse
//         title: 'Strip 2'
//       },
//       {
//         name: 'Strip 3_FRONT_2340.001',
//         color: '#B22222', // Firebrick
//         title: 'Strip 3'
//       }
//     ],
//     scale: [0.001, 0.001, 0.001],
//     fov: 50
// },

 {
    id: '10',
    name: 'Game Shirt',
    adultPrice: '$15.56',
    youthPrice: '$20.11',
    frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
    sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey_left9cd8d3f2e0ff/thumbnail.jpg',
    customizeLink: '',
    className: 'sublimated nvf-sublimated-jersey men',
    isNew: true,
    modelPath: '/game-shirt.glb',
    materials: [
      {
        name: 'Material55262',
        color: '#EEEEEE',
        title: 'Shirt Back'
      },
      {
        name: 'Material4355',
        color: '#FFFFFF',
        title: 'Material4355'
      },
      {
        name: 'Material4359',
        color: '#FFFFFF',
        title: 'Material4359'
      },
      {
        name: 'Material4363',
        color: '#FFFFFF',
        title: 'Material4363'
      },
      {
        name: 'Material5617',
        color: '#FFFFFF',
        title: 'Material5617'
      },
      {
        name: 'Material5687',
        color: '#FFFFFF',
        title: 'Material5687'
      },
      {
        name: 'Material20849',
        color: '#FFFFFF',
        title: 'Front'
      },
      {
        name: 'Material20881',
        color: '#FFFFFF',
        title: 'chips'
      },
      {
        name: 'Material20912',
        color: '#FFFFFF',
        title: 'Materiallogo'
      },
      {
        name: 'Material20943',
        color: '#FFFFFF',
        title: 'Upper logo '
      },
      {
        name: 'Material20974',
        color: '#FFFFFF',
        title: 'below shirt logo'
      },
     
  
      {
        name: 'Material56026',
        color: '#FFFFFF',
        title: 'left side salvee'
      },
      {
        name: 'Material56694',
        color: '#FFFFFF',
        title: 'left uper side salvee'
      },
      {
        name: 'Material58395',
        color: '#FFFFFF',
        title: 'right uper side salvee'
      },
    ],
    scale: [0.002, 0.002 , 0.002  ],
    fov: 75
  },

  // {
  //   id: '3',
  //   name: 'Male Shirt',
  //   adultPrice: '$99.99',
  //   youthPrice: '$95.99',
  //   frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
  //   sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/ak_267_nvf-sublimated-jersey_leftd7b3690c8c9f/thumbnail.jpg',
  //   customizeLink: '',
  //   className: 'sublimated male-shirt',
  //   isNew: true,
  //   modelPath: '/t-shirt-with-color-1.glb',
  //   materials: [
  //     {
  //       name: 'Cotton_Voile_Copy_1_FRONT_1575522',
  //       color: '#FFFFFF',
  //       title: 'Shoulder Color'
  //     },
  //     {
  //       name: 'Cotton_Voile_FRONT_1575513',
  //       color: '#FFFFFF',
  //       title: 'Front/Back Color'
  //     }
  //   ],
  //   scale: [0.002, 0.002, 0.002],
  //   fov: 75// Adjusted scale for this model to prevent zoom issues
  // },
  // {
  //   id: '4',
  //   name: 'NVF Blank Template',
  //   adultPrice: '$95.56',
  //   youthPrice: '$91.11',
  //   frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
  //   sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey_left9cd8d3f2e0ff/thumbnail.jpg',
  //   customizeLink: '',
  //   className: 'sublimated nvf-sublimated-jersey men',
  //   isNew: true,
  //   modelPath: '/full-shirt.glb',
  //   materials: [
  //     {
  //       name: 'Shirt',
  //       color: '#EOC8C8',
  //       title: 'Full Shirt Color'
  //     }
  //   ],
  //   scale: [2, 2, 2],
  //   fov: 100
  // },

  // {
  //   id: '5',
  //   name: 'Football MEO',
  //   adultPrice: '$95.56',
  //   youthPrice: '$91.11',
  //   frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
  //   sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey_left9cd8d3f2e0ff/thumbnail.jpg',
  //   customizeLink: '',
  //   className: 'sublimated nvf-sublimated-jersey men',
  //   isNew: true,
  //   modelPath: '/mevo.glb',
  //   materials: [
  //     {
  //       name: 'Louis_Vuitton_Original',
  //       color: '#FFFFFF',
  //       title: 'Full Shirt Color'
  //     }
  //   ],
  //   scale: [4, 4, 4],
  //   fov: 50
  // },

  // {
  //   id: '6',
  //   name: 'Football Shirt',
  //   adultPrice: '$95.56',
  //   youthPrice: '$91.11',
  //   frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
  //   sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey_left9cd8d3f2e0ff/thumbnail.jpg',
  //   customizeLink: '',
  //   className: 'sublimated nvf-sublimated-jersey men',
  //   isNew: true,
  //   modelPath: '/football_shirt.glb',
  //   materials: [
  //     {
  //       name: 'LasPalmasShirt',
  //       color: '#FFFFFF',
  //       title: 'Full Shirt Color'
  //     }
  //   ],
  //   scale: [4, 4, 4],
  //   fov: 6
  // },

  // {
  //   id: '7',
  //   name: 'Collar Shirt',
  //   adultPrice: '$10.56',
  //   youthPrice: '$12.11',
  //   frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
  //   sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey_left9cd8d3f2e0ff/thumbnail.jpg',
  //   customizeLink: '',
  //   className: 'sublimated nvf-sublimated-jersey men',
  //   isNew: true,
  //   modelPath: '/t-shirt-polo.glb',
  //   materials: [
  //     {
  //       name: 'Back_FRONT_2239',
  //       color: '#3EB8EF',
  //       title: 'Back Front Color'
  //     },
  //     {
  //       name: 'Button_Left_FRONT_2249',
  //       color: '#FFFFFF',
  //       title: 'Upper_Front_Button_Line  Color'
  //     },
  //     {
  //       name: 'Button_Right_FRONT_3950',
  //       color: '#FFFFFF',
  //       title: 'Below_Front_Button_Line  Color'
  //     },
  //     {
  //       name: 'Collar_FRONT_2229',
  //       color: '#878D8E',
  //       title: 'Collar Color'
  //     },
  //     {
  //       name: 'Front_FRONT_2234',
  //       color: '#FFFFFF',
  //       title: 'Front Color'
  //     },
  //     {
  //       name: 'inner_hand_FRONT_144199',
  //       color: '#464545',
  //       title: 'Saleev below Color'
  //     },
  //     {
  //       name: 'Lower_Left_FRONT_2224',
  //       color: '#FFFFFF',
  //       title: 'Left Cop Color'
  //     },
  //     {
  //       name: 'Lower_Right_FRONT_2214',
  //       color: '#FFFFFF',
  //       title: 'Right Cop Color'
  //     },
  //     {
  //       name: 'Material115145',
  //       color: '#FFFFFF',
  //       title: 'Button Color'
  //     },
  //     // {
  //     //   name: 'Pocket_FRONT_2244',
  //     //   color: '#FFFFFF',
  //     //   title: 'Pocket Color'
  //     // },
  //     {
  //       name: 'PT_FABRIC_FRONT_2281',
  //       color: '#FFFFFF',
  //       title: 'Full Shirt Color'
  //     },
  //     {
  //       name: 'Upper_Left_FRONT_2219',
  //       color: '#4DC8FF',
  //       title: 'Left Up Salvee Color'
  //     },
  //     {
  //       name: 'Upper_Right_FRONT_2209',
  //       color: '#4DC8FF',
  //       title: 'Right Up Salvee Color'
  //     },
  //   ],
  //   scale: [0.003,0.003,0.003],
  //   fov: 75
  // },

 
  // {
  //   id: '8',
  //   name: 'Football Shirt',
  //   adultPrice: '$95.56',
  //   youthPrice: '$91.11',
  //   frontImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey9cd8d3f2e0ff/thumbnail.jpg',
  //   sideImageSrc: 'https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/staging/blank-template_267_nvf-sublimated-jersey_left9cd8d3f2e0ff/thumbnail.jpg',
  //   customizeLink: '',
  //   className: 'sublimated nvf-sublimated-jersey men',
  //   isNew: true,
  //   modelPath: '/polo_nike_t-shirt.glb',
  //   materials: [
  //     {
  //       name: 'meterial_0',
  //       color: '#FFFFFF',
  //       title: 'Button Color'
  //     },
  //     {
  //       name: 'meterial_1',
  //       color: '#FFFFFF',
  //       title: 'Front Back Color'
  //     },
  //     {
  //       name: 'meterial_2',
  //       color: '#FFFFFF',
  //       title: 'Logo Color'
  //     },
  //   ],
  //   scale: [4, 4, 4],
  //   fov: 6
  // },

  // Add more items as needed
];

export default itemsData;
