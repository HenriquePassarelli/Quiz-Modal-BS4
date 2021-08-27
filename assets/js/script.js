

document.querySelector(".open").addEventListener("click", async (event) => {
    event.preventDefault();

    $.ajax({
        url: 'assets/js/json.json',
        type: 'GET',
        dataType: 'json',
        success: function (json) {

            var html = '';
            var json = json;
            var choices = [];
            var results = 0;

            for (let i in json) {
                var answers = '';

                for (let j in json[i].answers) {
                    answers += `
                    <hr>                        
                    <div class="custom-control custom-radio">
                         <input type="radio" id="${json[i].id}${json[i].answers[j][0]}" name="question-${json[i].id}" class="custom-control-input" value="${json[i].answers[j][0]}">
                         <label class="custom-control-label w-100" for="${json[i].id}${json[i].answers[j][0]}">${json[i].answers[j][1]}</label>
                    </div>                            
                    ` ;
                }
                let active = '';
                let pause = '';
                if (i == 0) {
                    active = "active";
                }
                if (i == (json.length - 1)) {
                    pause = ` 
                    <button id="Prev" class="btn btn-success" class="carousel-control-prev" href="#question-carousel" role="button" data-slide="prev">Back</button>
                    <button id="Finish" class="btn btn-danger " data-dismiss="modal" role="button" >Finish</button>`
                }
                else if (i == 0) {
                    pause = ` 
                    <button id="Next" class="btn btn-success" class="carousel-control-next" href="#question-carousel" role="button" data-slide="next">Next</button>`
                } else {
                    pause = ` 
                    <button id="Prev" class="btn btn-success" class="carousel-control-prev" href="#question-carousel" role="button" data-slide="prev">Back</button>
                    <button id="Next" class="btn btn-success" class="carousel-control-next" href="#question-carousel" role="button" data-slide="next">Next</button>`

                }

                html += `
                            <div id="${json[i].id}"  class="modal-content w-100 carousel-item ${active} " >
                                <div class="modal-header">
                                    <h5 class="modal-title">Question ${json[i].id}</h5>
                                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                                </div>
                                <div class="modal-body ">
                                    <div class="question"> ${json[i].question}</div>
                                    <div class="answer${json[i].id} ">
                                        ${answers}
                                    </div>
                                </div>                    
                                <div class="modal-footer" >
                                    ${pause}
                                </div>
                                
                            </div>

                `

            }
            $('#Modal').html(html);
            $('#Finish').click(function () {
                let radio = document.getElementsByTagName('input')
                for (let i = 0; i < radio.length; i++) {
                    if (radio[i].checked) {
                        choices.push(radio[i].value);
                    }

                }
                for (let i = 0; i < choices.length; i++) {

                    if (choices[i] == json[i].correctAnswer) {
                        results += 1;
                    }
                }

                if (results == 0) {
                    alert(`Sorry try again

                     Correct Answers   ${results}/3`);

                } else if (results == 1) {
                    alert(` You can improve!!
                
                Correct Answers   ${results}/3`);
                } else {
                    alert(` Well Done!!
                
                    Correct Answers   ${results}/3`);
                }

            });

        }

    })


});
