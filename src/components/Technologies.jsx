import React from 'react';

const Technologies = () => {

    return (
        <div>
            <section className="packages">
                <h3 className="title">Technolgies Known</h3>
                <p>We offer a variety of mountaineering packages. Whether you've climbed Everest or don't even know what a mountain is, we've got the perfect vacation for you.</p>
                <hr />

                <ul className="grid">
                    <li>
                        <i className="fab fa-js-square icon-size" />
                        <h4>JavaScript</h4>
                        <p>Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
                    </li>
                    <li>
                        <i className="fab fa-react icon-size" />
                        <h4>React</h4>
                        <p>Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our mountain buses.</p>
                    </li>
                    <li>
                        <i className="fab fa-node icon-size" />
                        <h4>Node JS</h4>
                        <p>If bicycles are more your speed, consider taking a tour through one of our mountain bike paths. We'll provide the bikes, and lunch too!</p>
                    </li>
                    <li>
                        <i className="fas fa-database icon-size" />
                        <h4>MySQL</h4>
                        <p>Got a competitive spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.</p>
                    </li>
                    <li>
                        <i className="fab fa-aws icon-size" />
                        <h4>AWS</h4>
                        <p>Got a competitive spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.</p>
                    </li>
                    <li>
                        <i className="fab fa-github icon-size" />
                        <h4>GitHub</h4>
                        <p>Got a competitive spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}
export default Technologies;