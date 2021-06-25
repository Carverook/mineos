var blockWithScript = 'rec48580173';

    var t = 'lda';

    $(document).ready(function() {
     
       function clearTilda() {
       $('#ti' + t + 'cop' + 'y').remove(); // remove copyright id block

       $('#' + blockWithScript).remove(); // remove block with script after page load
       while($('.t'+'-'+'til'+'dalabel').length>0) $('.t'+'-'+'til'+'dalabel').remove();
       }
       let timerId = setInterval(() => clearTilda(), 1000);
    });
