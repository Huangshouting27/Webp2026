import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//const changeText = (event) => {
    //console.log(event.target)
    //event.target.innerText = event.target.innerText + " 被點了"
//}
const MultiButton = (num) => {
    var output = []; // 準備一個空陣列來存放 JSX 元素
    output.push(
    <IconButton color ="primary" aria-label="add to shopping cart"><AddShoppingCartIcon/></IconButton>)
    output.push(<IconButton color="primary" aria-label="delete"><DeleteIcon/></IconButton>)
    output.push(<IconButton color = "primary" aria-label="add an alarm"><AlarmIcon/></IconButton>)
    return output; // 回傳整串按鈕陣列
}


export default MultiButton;