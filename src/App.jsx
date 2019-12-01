import React from 'react';
import './main.css';
import Button from "./Button";
import Container from "./Container";
import GetModal from "./GetModal";
import ModalWindow from "./ModalWindow";
import uuid from 'uuid-random';

const App = () => {
    let [showModal, setShowModal] = React.useState(false)
    let [arrayOfItem, setArray] = React.useState([])
    let [buttonRef, setButtonRef] = React.useState(null)

    // Сохраняем ссылку на кнопку вывода модалки в стейт
    const getButtonRef = (ref) => {
        setButtonRef(ref)
    }
    // По клику устанавливаем стейт для вывода модального окна
    const clickModalButton = () => setShowModal(true)
    // Прячем модальное окно если кликаем не на кнопку или окно
    const hideModal =() => {
        setShowModal(false)
    }
    // Заполняем массив стейта по клику
    const clickHandler = (position) =>{
        position ? setArray ([{content:`Index: ${arrayOfItem.length+1}.Count of clicks: `, key:uuid()},...arrayOfItem]) :
            setArray ([...arrayOfItem, {content:`Index: ${arrayOfItem.length+1}.Count of clicks: `, key:uuid()}] )
    }
    return (
        <div className="wrapper">
            <Button name = {'Add Top'} clickHandler={()=> clickHandler(true)}  />
            <Button name = {'Add Bottom'} clickHandler={()=>clickHandler(false)} />
            <Container className="wrapper" array={arrayOfItem}/>
            <GetModal clickModalButton={clickModalButton} getButtonRef={getButtonRef}/>
            {showModal && <ModalWindow hideModal={hideModal} buttonRef = {buttonRef}/>}
        </div>
    );
}

export default App;
