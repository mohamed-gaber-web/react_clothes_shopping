this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if (userAuth) { // check user sign in 
        const userRef = await createUserProfileDocument(userAuth);
        // document data 

        userRef.onSnapshot(snapshot => {
            // used method onSnapshot(arrow function)
            // console.log(snapshot.data()); // method .data() => get data
            this.setState({
                currentUser: {
                    id: snapshot.id,
                    ...snapshot.data() // all data in document })
                }
            })
        }
    
        }
}