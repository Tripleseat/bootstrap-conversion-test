$(function() {
	Test.init();
});

var Test = {

	init: function() {
		$('#clone_list').click(Test.clone_list);
        $('#open_modal').click(Test.open_modal);
		$('#close_modal').click(Test.close_modal);
	}

	,clone_list: function() {
		var list = $('.hidden-list-of-things').find('ul').clone();

		$('.list-of-things').append(list);
	}
    
    ,open_modal: function() {
		$('#basic-modal-content').modal();
    }
	
    ,close_modal: function() {
		$.modal.close();
    }
	
};