import React from 'react'

const Frame = () => {
  return (
    <>
    <div className="frame-container">
        <h1>Download your Movie from here</h1>
        {/* <iframe className='terabox
        ' src="https://teraboxapp.com/s/1MRY5Usj9OG8HPYmgSE4-QA" title='Terabox ' frameborder="0"></iframe> */}
          {/* <object type="text/html" data="https://teraboxapp.com/s/1MRY5Usj9OG8HPYmgSE4-QA" width="800px" height="600px"> */}
          <embed type="text/html" src="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed" width="250" height="200" />
    {/* </object> */}
    </div>
    </>
  )
}

export default Frame