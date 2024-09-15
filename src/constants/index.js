import{
    instagram,
    telegram,
    Housevideo1,
    Housevideo2,
    Housevideo3,
    Housevideo4,
} from "../assets"



export const navigation = [
    {
        id: "0",
        title: "About",
        url: "#about",
    },
    {
        id: "1",
        title: "Services",
        url: "#services",
        
    },
    {
        id: "2",
        title: "Gallery",
        url: "#gallery",
    },
    {
        id: "3",
        title: "Contact",
        url: "#Footer",
    },
    
];

export const socials = [
    
    {
        id: "0",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "1",
        title: "TikTok",
        iconUrl: telegram,
        url: "#",
    },
    
];

export const house_details = [
    {
        id: 1,
        textList: [
            "House 1",
            "4-bedroom with 4 bathrooms and toilet. Swimming pool kitchen, sitting-room"
        ],
        video: Housevideo1,
        videoDuration: 40
        
    },
    {
        id: 2,
        textList: [
            "House 4",
            "4-bedroom with 4 bathrooms and toilet. Swimming pool kitchen, sitting-room"
        ],
        video: Housevideo2,
        videoDuration: 40
    },
    {
        id: 3,
        textList: [
            "House 3",
            "4-bedroom with 4 bathrooms and toilet. Swimming pool kitchen, sitting-room"
        ],
        video: Housevideo3,
        videoDuration: 40
    },
    {
        id: 4,
        textList: [
            "House 2",
            "4-bedroom with 4 bathrooms and toilet. Swimming pool kitchen, sitting-room"
        ],
        video: Housevideo4,
        videoDuration: 40
    }
]
