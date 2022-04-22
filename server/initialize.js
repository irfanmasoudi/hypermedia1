

export default async (models) => {
    const catList = [
        {
            name: "Hitam",
            breed: "Kampung",
            description: "Details hitam",
            img: "https://s.abcnews.com/images/Lifestyle/HT_Roc_mar_140730_4x3_992.jpg",
        },
        {
            name: "Putih",
            breed: "Anggora",
            description: "Details  putih",
            img: "https://www.thesprucepets.com/thmb/IYaG0ElLFoOJ26Rtp-5CpefS0Jw=/1459x1459/smart/filters:no_upscale()/twenty20_e47b3798-dd9b-40b1-91ef-1d820337966e-5aa3f798642dca00363b0df1.jpg",
        },
        {
            name: "Coklat",
            breed: "Campuran",
            description: "Details coklat",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
        },
    ]
    await models.Cat.bulkCreate(catList)
}