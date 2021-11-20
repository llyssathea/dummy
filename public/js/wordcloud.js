document.getElementById('inputfile')
      .addEventListener('change', function() {
      
      var fr=new FileReader();
      fr.onload=function(){
        document.getElementById('output')
            .textContent=fr.result;
      }
      
      fr.readAsText(this.files[0]);
    })
    function myword() {
      var word = document.getElementById("output").value;
      var answer =  word.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ' ');
      var btn = document.getElementById("btn");

   // ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
    var myConfig = {
      type: 'wordcloud',
      options: {
        text: answer,
        //ignore: [""""],
        style: {
          fontFamily: 'Crete Round',
 
          hoverState: {
            backgroundColor: '#D32F2F',
            borderRadius: 2,
            fontColor: 'white'
          },
          tooltip: {
            text: '%text: %hits',
            visible: true,
            alpha: 0.9,
            backgroundColor: '#1976D2',
            borderRadius: 2,
            borderColor: 'none',
            fontColor: 'white',
            fontFamily: 'Georgia',
            textAlpha: 1
          }
        }
      
      }, source: {
        fontColor: '#64B5F6',
        fontSize: 10,
        fontFamily: 'Georgia',
        fontWeight: 'normal',
        marginBottom: '10%'
      }
    };
 
    zingchart.render({
      id: 'myChart',
      data: myConfig,
      height: 500,
      width: '100%',
    });
    }

    alert("Note: Please download the messages in the chatbox and upload here the downloaded file to display the insights in a word cloud. Make sure that the chatbox only contains the insights of the students. Incase that the chatbox already contains messages, you may clear the chat history.");
   