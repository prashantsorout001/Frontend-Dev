const user = {
    name: "Aditya",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const fixedUser = {
    name: "Aditya",
    showName() {
        console.log(this.name);
    }
};

fixedUser.showName();
