addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
 	const url = new URL(request.url);
 	var data = {starWars:[
 		"Try not. Do or do not. There is no try.",
 		"Who’s the more foolish: the fool or the fool who follows him?",
 		"Great, kid, don’t get cocky.",
 		"Why, you stuck-up half-witted scruffy-looking nerf herder.",
 		"Laugh it up, fuzzball!",
 		"I got a bad feeling about this.",
		"These aren’t the droids you’re looking for.",
		"I find your lack of faith disturbing.",
		"Mos Eisley, you will never find a more wretched hive of scum and villainy."
 	]}

 	var response = {}
 	response.text = data.starWars[Math.floor(Math.random() * data.starWars.length)]
  
// On HTTP method
	if (request.method === 'POST') {
		response.content = 'No POSTS allowed'
		response.type = 'application/json'
		response.status = config.block.status
  	}
	else{
	    response.content = `<HTML><header>`+config.app.name+`</header><body>`+response.text+`</body><footer>Version: `+config.app.version+`</footer></HTML>`,
	    response.type = 'text/html'
	    response.status = config.ok.status

    
  }
  return new Response(response.content, {status:response.status, headers:{'content-type': response.type}})
}
