
export default function handler(req, res) {
    //getting data submitted on the request body
    const body = req.body;


    console.log('body', body);


    //checks for data in your form and returns early if there is no data in the form

    if (!body.firstName || !body.lastName || !body.email || !body.password) {
        //sends the HTTP Bad request error 

        return res.status(400).json({
            data: 'Your form is incomplete fill all the details an submit again'
        })


    }

    //if the data in the form  send a http success code.button

    res.status(200).json({
        data: `${body.firstName} ${body.lastName} ${body.email} ${body.password}`
    })

}