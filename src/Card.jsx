import "./Card.css";

function Card() {
    return (
        <div className="card">
            <div className="image">
                <img src="../src/assets/turtle.jpg" alt="" />
            </div>
            <div className="info">
                <div className="name">Some Name</div>
                <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo lorem ac mollis tempus. Duis eu turpis mi. Aenean ut ultricies nisi, in egestas felis. Nulla congue, tellus non sodales maximus, nunc tellus ultricies nunc, non vulputate ipsum magna id massa. Curabitur in euismod enim, id ornare justo. Etiam malesuada turpis non quam bibendum, id pretium mauris efficitur. Nulla feugiat mi at neque blandit facilisis. Nunc porttitor metus ac venenatis porttitor. Praesent quis egestas quam. Pellentesque at diam ac ipsum consequat hendrerit eget sed ligula. Suspendisse egestas erat eget lectus pharetra, in volutpat massa pretium. Etiam ornare sagittis ipsum, quis molestie ipsum varius a. In hac habitasse platea dictumst.</div>
            </div>
        </div>
    )
}

export default Card;