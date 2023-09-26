import Link from "next/link";

const Form = ({ type, isSubmitting, onSubmit, post, setPost }) => {
  const handleChange = (e) => {
    setPost((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your imagination run wild with an AI-Powered platform.
      </p>
      <form onSubmit={onSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">Your Ai Prompts</span>
          <textarea
            value={post.prompt}
            onChange={handleChange}
            name="prompt"
            id="prompt"
            className="form_textarea"
            placeholder="Write your prompt here...."
            required
          />
        </label>
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="font-normal"> (#product, #development, #app, #blog)</span>
          </span>
          <input
            type="text"
            value={post.tag}
            onChange={handleChange}
            name="tag"
            id="tag"
            className="form_input"
            placeholder="#tag"
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link className="text-gray-500" href="/">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={isSubmitting}>
            {isSubmitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
