var dateTime = document.querySelector('#date');


dateTime.innerHTML = `${semana[diaSemana]}, ${mesDoAno[mes]} ${diaMes}`;




/***************/
up();
toggleMenu();
list(activeTask, 0);




/*****FORM*****/

var form = document.querySelector('.form');

form.addEventListener('submit',(e)=>{
	e.preventDefault();

	let task = document.querySelector('.form input');

	addTaskList(task.value);
	task.value = "";
	up();
});


/*Action small*/

function atualiza(){
	
var small =  document.querySelectorAll('small  a');

	small.forEach((item,index)=>{

		item.addEventListener('click', (e)=>{
			e.preventDefault();
			muda(index);
		});
	})
}










function toggleMenu(){
	var menu  = document.querySelectorAll('.menu li > a');
	var li =  document.querySelectorAll('.menu li');
	var ul = document.querySelectorAll('.relative ul');
	menu.forEach((item, index)=>{



		item.addEventListener('click', (e)=>{
			e.preventDefault();
			if(index == 0){
				ul[index].classList.add('show');
				ul[1].classList.remove('show');
				li[index].classList.add('active');
				li[1].classList.remove('active');
			}else{
				ul[index].classList.add('show');
				ul[0].classList.remove('show');
				li[index].classList.add('active');
				li[0].classList.remove('active');
			}
		})


	})


}



/****ABAS******/

function muda(index){
	var menu  = document.querySelectorAll('.menu li > a');
	var li =  document.querySelectorAll('.menu li');
	var ul = document.querySelectorAll('.relative ul');
	if(index == 0){
				ul[index].classList.add('show');
				ul[1].classList.remove('show');
				li[index].classList.add('active');
				li[1].classList.remove('active');
			}else{
				ul[index].classList.add('show');
				ul[0].classList.remove('show');
				li[index].classList.add('active');
				li[0].classList.remove('active');
			}
}




/* Mensagem de caixa de Task vazia */


function vazio(){
	var ul = document.querySelector('ul.task');

	if(!ul.innerHTML){
		ul.innerHTML = `<hr><span class="white">You currently have 0 tasks. Add a task to get started!</span>`;
	}
	
	
}
