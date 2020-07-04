/********TASK******/

var activeTask = ["Comer","Estudar","Viajar"];
var completedList = [];



/*** Nova tesk  ***/



function addTaskList(task){

	if(!task){
		alert('Campo vazio')
	}else{
		activeTask.push(task);
		list(activeTask, 0);
		list(completedList, 1);
		muda(0);
	}		

}	




/*** Listando tesks  ***/


function list(item,index){
	var list =  document.querySelectorAll('ul.col-12');
	var li = index;

	list[index].innerHTML= "";

	if(li == 1){

		item.forEach((cada )=>{
			var template1 = `<li>
					<span><img class="img" src="img/back.svg" alt="icone de concluir desativado"></span>
					<span class="theTask">${cada}</span>	
					<img class="img apaga" src="img/lixeira.svg" alt="icone de deletar"> 	
					</li>`;

		
			list[1].innerHTML += template1;
		})
			

		}else{
		
			item.forEach((cada )=>{
				var template = `<li>
					<span><img class="img" src="img/check_off.svg" alt="icone de concluir desativado"></span>
					<span class="theTask">${cada}</span>			
						</li>`;

		
				list[0].innerHTML += template;
		})





		}


	


	li = list[index].querySelectorAll('li');

	compliteTask(li,index)
}



/*completo*/


function compliteTask(itens, index){

	if(index == 1){

			itens.forEach((item, index)=>{
		item.querySelector('img.apaga').addEventListener('click',()=>{
			removeTask(completedList,index);

		})
	})

		itens.forEach((item, index)=>{
		item.querySelector('span img').addEventListener('click',()=>{
			activeTask.push(completedList[index]);


			completedList.splice(index,1);
	
			list(activeTask, 0);
			list(completedList, 1);
			up();
		})
	})



		
	}else{
		itens.forEach((item, index)=>{
		item.querySelector('span img').addEventListener('click',()=>{
			completedList.push(activeTask[index]);
			removeTask(activeTask,index);
		})
		})
	}
	




	vazio();

}


/*** Remove Tasks ***/


function removeTask(item, element){


	item.splice(element,1);
	
	list(activeTask, 0);
	list(completedList, 1);
	up();
}




/*** Update Tasks ***/


function up(){
	var qtTask = document.querySelector('small');

	qtTask.innerHTML = `<a href=""> ${activeTask.length} Active tasks </a> | <a href=""> ${completedList.length} Completed tasks </a>`;

	atualiza();
}