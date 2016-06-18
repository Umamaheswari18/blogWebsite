var should=require("chai").should(),
    expect=require("chai").expect,
    assert=require("chai").assert,
    supertest=require("supertest"),
    app=require('../server');

var url=supertest("http://localhost:8080");

//Testing the Get JSON API
describe("Testing the GET Blog File",function(err)
{
  it("should handle the request and read the JSON",function(done)
  {
      url
        .get("/api/blogs")
        .expect(200)
        .expect('Content-type',/json/)
        .end(function(err,res)
        {
          if(err)
          {
            throw err;
          }
          var myObj=JSON.parse(res.text);
          expect('myObj').to.exist;
          done();
        });
  });
});

describe("Testing the add blog route",function(err)
{
  it("Should handle the request and post has to be added",function(done)
  {
      url
        .post("/api/add")
        .send({"Title":"Micromax A106","ShortDes":"short","LongDes":"Long Description","Username":"Uma","Poster":"http://n2.sdlcdn.com/imgs/a/j/p/Micromax-Unite-2-A106-Mystic-SDL072634651-1-94a0b.jpg","writtenDate":Date()})
        .expect(200)
        .end(function(err,res)
        {
          if(err)
          {
            throw err;
          }
        done();
      })
    });

  it("Checking whether the object is added",function(done)
    {
        url
          .get("/api/blogs")
          .expect(200)
          .expect('Content-type',/json/)
          .end(function(err,res)
          {
            if(err)
            {
              throw err;
            }
            var myObj=JSON.parse(res.text);
            myObj[myObj.length-1].Title.should.be.equal("Micromax A106");
            done();
          })
    });
});



describe("Should handle the findby Title Routes",function(err)
{
  it("Checking whether the FindBy Title Api is working or not",function(done)
  {
      url
      .get("/api/blog/Micromax A106")
      .expect(200)
      .expect('Content-type',/json/)
      .end(function(err,res)
      {
        if(err)
        {
          throw err;
        }
        var myObj=JSON.parse(res.text);
        myObj.Title.should.be.equal("Micromax A106");
        done();
      })
  });
});
