import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Pretium quam vulputate dignissim suspendisse in. Nunc vel risus
              commodo viverra maecenas accumsan lacus vel facilisis. Porttitor
              leo a diam sollicitudin tempor id eu nisl nunc. Ipsum dolor sit
              amet consectetur adipiscing elit. Odio eu feugiat pretium nibh.
              Nibh mauris cursus mattis molestie a iaculis at erat. Magna ac
              placerat vestibulum lectus. Turpis nunc eget lorem dolor sed
              viverra ipsum nunc aliquet. Metus aliquam eleifend mi in nulla
              posuere sollicitudin. Mauris augue neque gravida in fermentum.
              Egestas erat imperdiet sed euismod nisi porta. Cum sociis natoque
              penatibus et.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
