
/* 

$(function () {
    
}); */

document.querySelector(".open").addEventListener("click", async (event) => {
    event.preventDefault();

    $.ajax({
        url: 'assets/js/json.json',
        type: 'GET',
        dataType: 'json',
        success: function (json) {

            var html = '';
            var answers =  '';
            var json = json;
            var id = 0;
            console.log(json);

            for (let i in json) {
                console.log(json[i].answers[0])

                for (let j in json[j].answers) {
                    answers += `
                    <hr>                        
                    <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio"
                            class="custom-control-input">
                        <label class="custom-control-label" for="customRadio1">${j[0]}</label>
                    </div>                            
                    ` ;
                }


                console.log(json[i].answers)
                html += `

                        
                            <div id="${json[i].id}" class="modal-content w-100 carousel-item active">
                                <div class="modal-header">
                                    <h5 class="modal-title">Question ${json[i].id}</h5>
                                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                                </div>
                                <div class="modal-body ">
                                    <div class="question"> ${json[i].question}</div>
                                    <div class="answer">
                                        ${answers}
                                    </div>
                                </div>                    
                                <div class="modal-footer" >
                                    <button id="Next" class="btn btn-success" class="carousel-control-next" href="#carouselExampleeControls" role="button" data-slide="next">Next</button>
                                </div>
                                
                            </div>




                `


            }
            $('#Modal').html(html);

            $('#Next').click(function () {
                if (id == json.length) {
                    console.log(json.length);

                }
                else {

                    id += 1;
                    console.log($("input[type='text']").val());
                }

            });
        }

    })


});


$(function () {
    $('#02').toast('hide')
})
