var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');




var AddMovieBox=React.createClass({
  componentDidMount:function()
  {

      $('#addMovieButton').on('click',function()
      {
        $.ajax({
        type:'POST',
        url:'/api/movies/add',
        data: jQuery.param({ Title: $('#addTitle').val(),Year: $('#addYear').val(),Director:$('#addDirector').val(),
      Actors:$('#addActors').val(),Plot:$('#addPlot').val(),Released:$('#addReleased').val(),Poster:$('#addPoster').val(),
      someid:$('#addID').val() }),
        dataType: 'json',
        cache: false,
        success:function(result)
        {

        }
      })

    })
  },

  render:function()
  {
    return(
      <div className="container">

        <NavigationBar />

      <div className="row" id="addMovie">
		    <div className="col-md-12">
			     <form role="form">
				       <div className="form-group">

					          <label for="addTitle">
						              Title
					          </label>

                    <input type="text" className="form-control" id="addTitle" />
				        </div>

                <div className="form-group">

					           <label for="addYear">
						               Year
					           </label>
					           <input type="text" className="form-control" id="addYear" />
				        </div>
                <div className="form-group">

					           <label for="addActors">
						               Actors
					           </label>
					           <input type="text" className="form-control" id="addActors" />
				        </div>
                <div className="form-group">

					           <label for="addDirector">
						               Director
					           </label>
					           <input type="text" className="form-control" id="addDirector" />
				        </div>
                <div className="form-group">

                     <label for="addPlot">
                          Plot
                     </label>
                     <input type="text" className="form-control" id="addPlot" />
                </div>
                <div className="form-group">

                     <label for="addReleased">
                          Released
                     </label>
                     <input type="text" className="form-control" id="addReleased" />
                </div>
                <div className="form-group">
                  <label for="addID">
          						Give some Id
          				</label>
  					      <input type="text" id="addID"  className="form-control" />
                </div>

              <div className="form-group">
                <label for="addPoster">
        						image Address
        				</label>
					      <input type="text" id="addPoster"  className="form-control" />
              </div>

			    </form>
          <center>
          <button className="btn btn-default btn-primary" id="addMovieButton" className="form-control">
                 Add Movie
          </button>
          </center>
		    </div>
	     </div>
      </div>
    );
  }
});


module.exports=AddMovieBox;
