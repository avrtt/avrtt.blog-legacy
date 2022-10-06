import { useState } from 'react'
import TelegramComments from 'react-telegram-comments';

import './gallery.css'

const Gallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <div className='fullScreenImage' onClick={handleCloseModal}> 
            <img src={galleryImages[slideNumber].img} alt={galleryImages[slideNumber].key} referrerpolicy="no-referrer" />
            <div class='desc'><div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId={galleryImages[slideNumber].key} showDislikes={true} customHeight='570' /></div></div>
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Gallery
