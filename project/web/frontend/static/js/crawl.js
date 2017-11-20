/**
 * @jsx React.DOM
 */

var React = require('react');
// const Immutable = require('Immutable');
const http = require('./http');
const createReactClass = require('create-react-class');

module.exports = createReactClass({

  getInitialState: function() {
    return {
      seed: '', depth: -1, loading: false, error: false, result: false
    };
  },

  handleSeedChange: function (e) {
    this.setState({'seed': e.target.value});
  },

  handleDepthChange: function (e) {
    this.setState({'depth': e.target.value});
  },

  startCrawl: function (e) {
    e.preventDefault();    
    this.setState({'loading': true});
    http.get('/api/crawler/crawl', {'depth': this.state.depth, 'seed': this.state.seed})
      .then((response) => {
        this.setState({'loading': false, 'result': response.data.contents});    
      })
      .catch((response) => {
        console.log(response);
        this.setState({'loading': false, 'error': "Crawl Failed"});
      });
  },

  dismissAlert: function (e) {
    this.setState({'error': false});  
  },

  render: function() {
    return (
        <div>
            <h1 className="page-title">React Scan Crawler</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        { this.state.error ? this.renderError() : null }
                        <form method="POST" name="form" className="form-inline"
                            role="form" noValidate onSubmit={this.startCrawl}>
                            <div className="form-group col-xs-12 col-md-6">
                                <input type="text" id="seed" name="seed" className="form-control input-sm input" placeholder="URL" required onChange={this.handleSeedChange}/>
                            </div>
                            <div className="form-group col-xs-6 col-md-3">
                                <input type="text" id="depth" name="depth" className="form-control input-sm input" placeholder="Depth" required onChange={this.handleDepthChange}/>              
                            </div>
                            { this.renderButton() }
                        </form>     
                    </div>                      
                </div>
            </div>
            <hr/>  
            { this.state.result ? this.renderResult() : null }     
        </div>
    );
  },

  renderError: function () {
    return (
      <div className="col-xs-12">
          <div className="alert alert-danger alert-dismissible" role="alert">
              <button type="button" className="close" onClick={this.dismissAlert}
              aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
              { this.state.error }
          </div>
      </div>      
    );
  },

  renderButton: function () {
    return (
      <button type="submit" className="btn btn-primary btn-sm col-xs-6 col-md-3">
          <span className={`${this.state.loading? 'hide' : 'show'}`}>
            Crawl
          </span>
          <span className={`${this.state.loading? 'show' : 'hide'}`}>
            <img src="static/img/loading.gif"/>
          </span>
      </button>
    );
  },

  renderResult: function () {
    const listItems = this.state.result.map((data, i) => {
      const imgs = data.images.map((img, j) => 
        <div className="col-md-2 panel" key={j}>
          <img src={img}/>
        </div>
      );

      return (
        <div className="element" key={i}>
            <div className="row link"><a href="{data.link}">{data.link}</a></div>
            <div className="row portfolio">  
              {imgs}
            </div>      
        </div>
      );      
    });
    return (
      <div className="result">
        {listItems}
      </div>
    );
  }
});
