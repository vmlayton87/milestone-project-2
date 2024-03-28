const React = require('react')
const Def = require('./default')

function home () {
    return ( 
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="./assets/island.jpg" alt="Tropical Island" />
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
