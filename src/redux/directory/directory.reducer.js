const INITIAL_STATE = {
    sections: [
        {
          id: 1,
          title: "Hats",
          linkUrl: "hats",
          urlImage: "assets/images/hats.jpg"
        },
        {
          id: 2,
          title: "jackets",
          linkUrl: "",
          urlImage: "assets/images/jackets.jpg"
        },
        {
          id: 3,
          title: "Sneakers",
          linkUrl: "",
          urlImage: "assets/images/sneakers.jpg"
        },
        {
          id: 4,
          title: "Mens",
          size: "large",
          linkUrl: "",
          urlImage: "assets/images/mans.jpg"
        },
        {
          id: 5,
          title: "Womens",
          size: "large",
          linkUrl: "",
          urlImage: "assets/images/womens.jpg"
        }
      ]
}

const DirectoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state;
    }
}

export default DirectoryReducer;