
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('users').del(),

    knex('users').insert([{
  	  id: 1,
  	  first_name: 'John',
  	  last_name: 'Tsunami',
  	  location: 'San Diego',
  	  email: 'sanDiegoJohnnyTsunami@gmail.com',
  	  strava_id: '1877355',
      strava_account_check: false,
      strava_access_token: '',
  	  photo_url: 'http://vignette3.wikia.nocookie.net/marvelmovies/images/1/10/Cary-Hiroyuki_Tagawa.jpg/revision/latest?cb=20091105181856',
  	  hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',  // youreawizard
  	  created_at: new Date('2018-06-29 14:26:16 UTC'),
  	  updated_at: new Date('2018-06-29 14:26:16 UTC')
    },{
  	  id: 2,
  	  first_name: 'Jeremy',
  	  last_name: 'Beal',
  	  location: 'San Francisco',
  	  email: 'bealjr85@gmail.com',
      strava_id: 18491083,
      strava_account_check: false,
      strava_access_token: '',
      photo_url: 'https://avatars0.githubusercontent.com/u/13801168?s=400&u=e2a9ef84012d78b39a0543f7383e5235f2dd5f37&v=4',
  	  hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',  // youreawizard
  	  created_at: new Date('2018-06-29 14:26:16 UTC'),
  	  updated_at: new Date('2018-06-29 14:26:16 UTC')
    }])
  );
};
