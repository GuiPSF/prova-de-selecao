import './style_sidebar.css'
import hamburguer from '../../assets/icons/hamburguer.svg'
import hamburguerAberto from '../../assets/icons/hamburguer-aberto0.svg'

const Sidebar = ({setOpen, open}) => {
    return (
        <section>
            {!open ? (
                <button type='button' onClick={() => setOpen(prev => !prev)}>
                    <img src={hamburguer} alt="hamburg" className='img_hamburguer'/>
                </button>
            ):(
                
                <div className='sidebar'>
                    <div className='sidebar_background'></div>
                    <div className='sidebar_content'>
                        <button type='button' onClick={() => setOpen(prev => !prev)}>
                            <img src={hamburguerAberto} alt="hamburgAberto" className='img_hamburguer'/>
                        </button>
                        <a href="#lista" onClick={() => setOpen(prev => !prev)}>lista</a>
                        <a href="#footer" onClick={() => setOpen(prev => !prev)}>sobre mim</a>
                        <a href="#cadastro" onClick={() => setOpen(prev => !prev)}>cadastro</a>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Sidebar