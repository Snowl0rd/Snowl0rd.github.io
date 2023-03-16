var alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ' ,'ъ', 'ы', 'ь', 'э', 'ю', 'я']
<script>
function translate() {
if(document.getElementById('ru').value=='введите')
document.getElementById('en').value='enter';
 
if(document.getElementById('ru').value=='текст')
document.getElementById('en').value='text';
}
</script>
 
<input type="text" id="ru" />
<input type="text" id="en" />
<input type="button" value="Перевести" onclick="translate()" />