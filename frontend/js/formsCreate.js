const btn_add = document.getElementById("btn_add")
const create_question = document.createElement('div');
const container = document.getElementById("questions-container")



{/* <input type="text" placeholder="Pergunta ${questionCount}">
<select>
    <option value="text">Resposta Curta</option>
    <option value="multiple">Múltipla Escolha</option>
</select> */}

let questionsCount = 0
function addQuestion(){
    if (questionsCount >= 10){
        alert("Você atingiu o limite de criação de 10 perguntas!")
        return
    }
    questionsCount ++
    create_question.innerHTML += `
        <input type="text" name="question_${questionsCount}" placeholder="Pergunta ${questionsCount}">
        <input type="text" name="question_${questionsCount}" placeholder="Resposta ${questionsCount}">

                <select type="type_${questionsCount}">
                    <option value="text">Resposta Curta</option>
                    <option value="multiple">Múltipla Escolha</option>
                </select>
        

            `;

            container.appendChild(create_question);
        }
