const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateText = async (req,res) =>{
	try{
		const {prompt,temperature} = req.body;

		const response = await openai.createCompletion({
		  model: "text-davinci-003",
		  prompt,
		  max_tokens: 435,
		  top_p: 1,
		  frequency_penalty: 0,
		  presence_penalty: 0,
		});

		res.status(200).json({
			status:true,
			data:response.data.choices[0].text
		});

	}catch(error){
		if (error.response) {
		    console.log(error.response.status);
		    console.log(error.response.data);
		} else {
			console.log(error.message);
		}
		res.status(400).json({
			status:false,
			data:error.message
		});
	}
}

module.exports = {generateText}