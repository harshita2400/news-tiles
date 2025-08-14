import image from '../assets/news.jpg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{
        maxWidth: "345px",
        height: "100%", // ensure equal height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <img
        src={src ? src : image}
        style={{
          height: "190px",
          width: "330px",
          objectFit: "cover"
        }}
        className="card-img-top"
        alt="news"
      />
      <div
        className="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1
        }}
      >
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "Untitled"} Card title
        </h5>
        <p
          className="card-text"
          style={{
            flexGrow: 1
          }}
        >
          {description
            ? description.slice(0, 90)
            : "It is info about something that has just happened."}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          style={{
            marginTop: "auto" // pushes button to bottom
          }}
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsItem
