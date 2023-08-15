$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date = new Date().toLocaleDateString()

    $(document).ready(function(){
        $('#date').html(date)
    })



    //  write an event, when Submit button is clicked
    $('').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                predicted_emotion= result.data.predicted_emotion
                emo_url=result.data.predicted_emo_img_url
                $('#sentiment').html(predicted_emotion)
                $('#emoji').attr('src',emo_url)
                $('#sentiment').css('display','block')
                $('#emoji').css('display','block')
            },

            //  if any error, run this function
            error : function(result){
                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})