import React from 'react'

const OurTeam = () => {
    let message ='It is a long established fact that a reader will be distracted by \n the readable content of a page when looking at its layout.'
  return (
    /*<div>OurTeam</div>*/
    <section className='section-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h2 className='section-title'>
                        The team behind Pacifio
                    </h2>
                       <p className='section-subtitle'>(message)</p>
                </div>
                <div className='col-sm-6 col-md-4'>
                    <div className='team-item'>

                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default OurTeam