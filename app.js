///
//intianiate github
const github=new Github;
//initiate the ui class
const ui=new UI;
//search usea
const searchUser=document.getElementById("searchUser");

//add and event listner

searchUser.addEventListener('keyup',(e) => {

    const userText=e.target.value;

    if(userText !== ''){
        github.getUser(userText).then((data) => {
            if (data.profile.message==="Not Found") {
                //Show an alert message that the user doesn't exit

                ui.showAlert('User Not Found',"alert alert-danger");

            } else {
                //Show the user profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        }).catch((err) => {
            console.log("an error occured");
        });
    }else{
        //clear profile
        ui.clearProfile();
    }
});