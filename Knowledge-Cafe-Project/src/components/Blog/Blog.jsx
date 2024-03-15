import PropTypes from 'prop-types'; // ES6

const Blog = ({blog}) => {
    // console.log(blog);

    const {title, cover_img} = blog;

    return (
        <div>
            <img src={cover_img} alt={`Cover picture of ${title}`} />
            <div>
                
            </div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;