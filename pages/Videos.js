function Videos() {
  return (
    <div className="page">
      <h1>Tech Music Videos</h1>

      <div className="video-container">

        <div className="video-card">
          <h2>Understanding Sound</h2>
          <video width="400" controls>
            <source src="/videos/sound.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <h2>Music and Songs Basics</h2>
          <video width="400" controls>
            <source src="/videos/songs.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <h2>Reading Music Notation</h2>
          <video width="400" controls>
            <source src="/videos/reading.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <h2>Introduction to Musical Notes</h2>
          <video width="400" controls>
            <source src="/videos/notes.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <h2>Holding a Saxophone Correctly</h2>
          <video width="400" controls>
            <source src="/videos/holdingsax.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <h2>C Major Scale Tutorial</h2>
          <video width="400" controls>
            <source src="/videos/cmajor.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  );
}

export default Videos;