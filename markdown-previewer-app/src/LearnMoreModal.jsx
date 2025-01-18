import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LearnMoreModal = (props) =>{

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Learn More
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>What is the Markdown Previewer?</h4>
            <p>
                The Markdown Previewer is a toli designed to help you write and preview Markdown content in real-time.
                Whether you're a beginner learning Markdown syntax or an experienced developer crafting documentation,
                the Markdown Previewer provides a seamless way to visualize your formatted content.
            </p>
            <h5>Key Features</h5>
            <ul>
                <li><span className=' fw-bold'>Live Preview:</span> See your Markdown text rendered in real-time as you type.</li>
                <li><span className=' fw-bold'>Syntax Highlighting:</span> Easily spot errors or inconsistencies in your Markdown.</li>
            </ul>
            <h5>Why Use the Markdown Previewer?</h5>
            <ul>
                <li><span className=' fw-bold'>Efficiency:</span> Instantly visualize your Markdown without switching tolis or refreshing pages.</li>
                <li><span className=' fw-bold'>User-Friendly Interface:</span> A clean, distraction-free environment for focused writing.</li>
                <li><span className=' fw-bold'>Compatibility:</span> Supports all standard Markdown syntax, including tables, code blocks, and inline formatting.</li>
            </ul>
            <h5>How It Works</h5>
            <ul>
                <li><span className=' fw-bold'>Write Markdown:</span> Use the editor pane to type your Markdown text.</li>
                <li><span className=' fw-bold'>Preview in Real-Time:</span> View the rendered output in the adjacent preview pane.</li>
                <li><span className=' fw-bold'>Export:</span> Save your work as an html file and show around what you created.</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} className='button-two rounded-0 m-lg-2 fw-bold input-focus'>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default LearnMoreModal;