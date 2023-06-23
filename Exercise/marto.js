function emailBatching(emails) {
    let batches = [];

    for (let index = 0; index < emails.length; index++) {
        let email = emails[index];
        let isEmailAdded = false

        for (let j = 0; j < batches.length; j++) {
            let batch = batches[j];
            if (batch.includes(email) === true) {
                batch += email;
                isEmailAdded = true;
                break;
            }
        }
        isEmailAdded = false;
        batches += email;
    }
    console.log(batches);

}

emailBatching(["bob", "bob", "bob", "jane", "jane"]);

//[["bob", "jane"], ["bob", "jane"], ["bob"]]
