

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
            img: "https://www.thehappycatsite.com/wp-content/uploads/2017/12/White-Cat-HC-long.jpg",
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