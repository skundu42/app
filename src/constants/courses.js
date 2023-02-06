import SectionH1 from "../components/Textformat/SectionHeading";
import InnerSectionH2 from "../components/Textformat/InnerSectionHeading";
import SectionParagraph from "../components/Textformat/SectionParagrah";
import ListItems from "../components/Textformat/ListItems";
import SampleVideo from './../assets/Videos/samplevideo.mp4'
import MediaPlayer from "../components/CourseContent/MediaPlayer";
import Course1 from "../assets/images/course/1.png"
import Course2 from "../assets/images/course/2.png"
import Course3 from "../assets/images/course/3.png"
import Course4 from "../assets/images/course/4.png"
import Course5 from "../assets/images/course/5.png"
import Course6 from "../assets/images/course/6.png"
import Course7 from "../assets/images/course/7.png"
import Course8 from "../assets/images/course/8.png"
import Course9 from "../assets/images/course/9.png"







const courses = [
    {
        course_id: "1",
        name: "Build a Web3 app with Solidity",
        ledBy: "Norito Sans",
        chapters: [
            {
                name: "GETTING STARTED",
                sections: [
                    {
                        name: "Welcome, let's get you the details!",
                        content: <div >
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionH1 text="Welcome, let's get you the details!" />
                                <InnerSectionH2 text="Welcome" />
                            </div>
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="In this tutorial we’ll cover basics of the blockchain technology and some of the key terminologies of the same." />
                                {/* <SectionParagraph text=" A few action items for you before moving on:" />
                                <ListItems text={<><p className="mr-2">1.</p>
                                    <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                                <ListItems text={<><p className="mr-2">2.</p>
                                    <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                                <ListItems text={<><p className="mr-2">3.</p>
                                    <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                                <InnerSectionH2 text="This is going to be awesome" topmargin="15px" /> */}
                            </div>
                            {/* <div>
                                <MediaPlayer Video={SampleVideo}/>
                            </div>
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                                <SectionParagraph text={<p>What does "shipping" mean? Well, it means you'll actually make something and then deploy it to the internet for the world to see and use. You'll be able to show the final project off to your friends, potential employers, and even your dog! The best part is, your fellow classmates will be the first users for your project!!</p>} />
                                <SectionParagraph text=" This stuff is very new, there's a lot of hype around it, and it can be super difficult to understand the best way to learn it." />
                                <SectionParagraph text=" With this project, you're going to learn about crypto tech by actually writing code and just hopping into the good stuff. No B.S. We'll also go over theory and more in-depth concepts, but, it will all be structured around your project." />
                                <SectionParagraph text=" Checkout a little intro video I made about this project below!" />
                                <InnerSectionH2 text="What will you be building?" topmargin="15px" /></div>
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                                <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                                <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                                <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                                <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                            </div> */}
                            <div className="border-[#33363A] border-b-[1px]"></div>
                        </div>
                    }

                ]

            },
            {
                name: "BASICS OF BLOCKCHAIN",
                sections: [
                    {
                        name: "Chapter 1",
                        content: <div >
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionH1 text="Chapter 1" />
                                <InnerSectionH2 text="Welcome" />
                            </div>
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="Blockchain has recently become a hot topic, and there is a ton of tension around what it is and how it really works. Some basic terminologies are tricky to understand for a person new to this technology. In this chapter, we’d be looking at these terminologies, and we’ll try to understand their real meaning. So let’s get going and start with the blockchain itself." />
                                {/* <SectionParagraph text=" A few action items for you before moving on:" />
                                <ListItems text={<><p className="mr-2">1.</p>
                                    <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                                <ListItems text={<><p className="mr-2">2.</p>
                                    <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                                <ListItems text={<><p className="mr-2">3.</p>
                                    <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                                <InnerSectionH2 text="This is going to be awesome" topmargin="15px" /> */}
                            </div>
                            {/* <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                                <SectionParagraph text={<p>What does "shipping" mean? Well, it means you'll actually make something and then deploy it to the internet for the world to see and use. You'll be able to show the final project off to your friends, potential employers, and even your dog! The best part is, your fellow classmates will be the first users for your project!!</p>} />
                                <SectionParagraph text=" This stuff is very new, there's a lot of hype around it, and it can be super difficult to understand the best way to learn it." />
                                <SectionParagraph text=" With this project, you're going to learn about crypto tech by actually writing code and just hopping into the good stuff. No B.S. We'll also go over theory and more in-depth concepts, but, it will all be structured around your project." />
                                <SectionParagraph text=" Checkout a little intro video I made about this project below!" />
                                <InnerSectionH2 text="What will you be building?" topmargin="15px" /></div>
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                                <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                                <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                                <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                                <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                            </div> */}
                            <div className="border-[#33363A] border-b-[1px]"></div>
                        </div>
                    },
                    {
                        name: "Chapter 2",
                        content: <div >
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionH1 text="Chapter 2" />
                                <InnerSectionH2 text="Welcome" />
                            </div>
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="A technical definition we often come across is that it is a shared digital ledger. Now, what does it mean? So to understand it, think of a database as some records, but instead of storing them in one computer, it gets stored in multiple computers. Where each computer signifies a node and the network of nodes signifies a peer." />
                                <SectionParagraph text="Below is a diagram showing the difference between a peer and node. We’ll get to them later in this article." />
                                <div style={{ "display": "flex", "justifyContent": "center" }}>
                                    <div style={{ "display": "flex" }} ><img src={Course1} /></div>
                                </div>
                                {/* <ListItems text={<><p className="mr-2">1.</p>
                                    <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                                <ListItems text={<><p className="mr-2">2.</p>
                                    <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                                <ListItems text={<><p className="mr-2">3.</p>
                                    <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                                <InnerSectionH2 text="This is going to be awesome" topmargin="15px" /> */}
                            </div>
                            <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="Let’s return to the blockchain and see how the data is stored in a blockchain and linked?" />
                                <SectionParagraph text="Suppose you made a transaction on a blockchain network, say on ethereum; how will it be stored in the network?"/>
                                <SectionParagraph text="Looking at the diagram below, we can see a block ( which is basically a collection of data and, in this case, a transaction record ). Each block is linked to a previous block that contains the exact data for some other transaction. Here a block references a block preceding it and together builds up a chain. So as time goes by, it keeps on adding more and more blocks, and the size of the network increases." />

                                <div style={{ "display": "flex", "justifyContent": "center" }}>
                                    <div style={{ "display": "flex" }} ><img src={Course2} /></div>
                                </div>

                                <SectionParagraph text="Now that we know about blockchain and its working, we should move on to some more terminology. So let’s look at the P2P ( Peer Peer ) network." />
                                <SectionParagraph text="Before looking into the working of the P2P network, we must know first why do we need it?"/>
                                <SectionParagraph text="So to understand this, let’s take an example of the standard economic terms. Let’s say you make a transaction via mobile device. The transaction record has been stored in your bank servers, ensuring that once the transaction has been done, it can never be repeated again. It is really not possible to spend the same money again."/>
                                <SectionParagraph text="But in blockchain networks, it is possible, and since there is no central authority looking over it, fraudsters can do pretty good scams. This problem is well known by the name Double Spending. When the owner of a coin tries to spend it, once it has already been spent before."/>
                                <SectionParagraph text="Here is when the validators ( Peer in a P2P network) come into the picture. Now each peer contains a copy of all the records/transactions that have ever been made on the network. And when a new record comes, a peer first validates it and examines if it obeys all the rules of the blockchain, and then it gets added, and if it doesn’t, the record gets rejected. So this is how a blockchain network ensures security for its users."/>
                                <SectionParagraph text="Since we talked about the rules in the above paragraph, let’s put some light on it."/>
                                {/* <InnerSectionH2 text="What will you be building?" topmargin="15px" /> */}
                            </div>
                            {/* <div className="border-[#33363A] border-b-[1px]">
                                <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                                <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                                <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                                <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                                <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                            </div> */}
                            <div className="border-[#33363A] border-b-[1px]"></div>
                        </div>
                    },
                    // {
                    //     name: "Compile contract locally and run it",
                    //     content: <div >
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionH1 text="Compile contract locally and run it" />
                    //             <InnerSectionH2 text="Welcome" />
                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="You've made it — hell yeah! Welcome :). My name is Farza and I’ll be your instructor. This project is for devs that want to get more into crypto tech. All you really need to know going into this: some terminal skills, some javascript, some react.js. You'll pick up the rest along the way." />
                    //             <SectionParagraph text=" A few action items for you before moving on:" />
                    //             <ListItems text={<><p className="mr-2">1.</p>
                    //                 <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                    //             <ListItems text={<><p className="mr-2">2.</p>
                    //                 <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                    //             <ListItems text={<><p className="mr-2">3.</p>
                    //                 <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                    //             <InnerSectionH2 text="This is going to be awesome" topmargin="15px" />
                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                    //             <SectionParagraph text={<p>What does "shipping" mean? Well, it means you'll actually make something and then deploy it to the internet for the world to see and use. You'll be able to show the final project off to your friends, potential employers, and even your dog! The best part is, your fellow classmates will be the first users for your project!!</p>} />
                    //             <SectionParagraph text=" This stuff is very new, there's a lot of hype around it, and it can be super difficult to understand the best way to learn it." />
                    //             <SectionParagraph text=" With this project, you're going to learn about crypto tech by actually writing code and just hopping into the good stuff. No B.S. We'll also go over theory and more in-depth concepts, but, it will all be structured around your project." />
                    //             <SectionParagraph text=" Checkout a little intro video I made about this project below!" />
                    //             <InnerSectionH2 text="What will you be building?" topmargin="15px" /></div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                    //             <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                    //             <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                    //             <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                    //             <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]"></div>
                    //     </div>
                    // },
                    // {
                    //     name: "Store 👋 data on our smart contract",
                    //     content: <div >
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionH1 text="Store 👋 data on our smart contract" />
                    //             <InnerSectionH2 text="Welcome" />
                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="You've made it — hell yeah! Welcome :). My name is Farza and I’ll be your instructor. This project is for devs that want to get more into crypto tech. All you really need to know going into this: some terminal skills, some javascript, some react.js. You'll pick up the rest along the way." />
                    //             <SectionParagraph text=" A few action items for you before moving on:" />
                    //             <ListItems text={<><p className="mr-2">1.</p>
                    //                 <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                    //             <ListItems text={<><p className="mr-2">2.</p>
                    //                 <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                    //             <ListItems text={<><p className="mr-2">3.</p>
                    //                 <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                    //             <InnerSectionH2 text="This is going to be awesome" topmargin="15px" />
                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                    //             <SectionParagraph text={<p>What does "shipping" mean? Well, it means you'll actually make something and then deploy it to the internet for the world to see and use. You'll be able to show the final project off to your friends, potential employers, and even your dog! The best part is, your fellow classmates will be the first users for your project!!</p>} />
                    //             <SectionParagraph text=" This stuff is very new, there's a lot of hype around it, and it can be super difficult to understand the best way to learn it." />
                    //             <SectionParagraph text=" With this project, you're going to learn about crypto tech by actually writing code and just hopping into the good stuff. No B.S. We'll also go over theory and more in-depth concepts, but, it will all be structured around your project." />
                    //             <SectionParagraph text=" Checkout a little intro video I made about this project below!" />
                    //             <InnerSectionH2 text="What will you be building?" topmargin="15px" /></div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                    //             <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                    //             <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                    //             <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                    //             <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]"></div>
                    //     </div>
                    // },
                    // {
                    //     name: "Deploy locally so we can start building the website",
                    //     content: <div >
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionH1 text="Deploy locally so we can start building the website" />
                    //             <InnerSectionH2 text="Welcome" />
                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="You've made it — hell yeah! Welcome :). My name is Farza and I’ll be your instructor. This project is for devs that want to get more into crypto tech. All you really need to know going into this: some terminal skills, some javascript, some react.js. You'll pick up the rest along the way." />
                    //             <SectionParagraph text=" A few action items for you before moving on:" />
                    //             <ListItems text={<><p className="mr-2">1.</p>
                    //                 <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                    //             <ListItems text={<><p className="mr-2">2.</p>
                    //                 <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                    //             <ListItems text={<><p className="mr-2">3.</p>
                    //                 <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                    //             <InnerSectionH2 text="This is going to be awesome" topmargin="15px" />
                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                    //             <SectionParagraph text={<p>What does "shipping" mean? Well, it means you'll actually make something and then deploy it to the internet for the world to see and use. You'll be able to show the final project off to your friends, potential employers, and even your dog! The best part is, your fellow classmates will be the first users for your project!!</p>} />
                    //             <SectionParagraph text=" This stuff is very new, there's a lot of hype around it, and it can be super difficult to understand the best way to learn it." />
                    //             <SectionParagraph text=" With this project, you're going to learn about crypto tech by actually writing code and just hopping into the good stuff. No B.S. We'll also go over theory and more in-depth concepts, but, it will all be structured around your project." />
                    //             <SectionParagraph text=" Checkout a little intro video I made about this project below!" />
                    //             <InnerSectionH2 text="What will you be building?" topmargin="15px" /></div>
                    //         <div className="border-[#33363A] border-b-[1px]">
                    //             <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                    //             <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                    //             <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                    //             <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                    //             <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                    //         </div>
                    //         <div className="border-[#33363A] border-b-[1px]"></div>
                    //     </div>
                    // },



                ]
            },
            {
                name: "CONNECT TO WALLET",
                sections: [
                    {
                        name: "Setup Metamask",
                        content: <div >
                        <div className="border-[#33363A] border-b-[1px]">
                            <SectionH1 text="Setup Metamask" />
                            <InnerSectionH2 text="Welcome" />
                        </div>
                        <div className="border-[#33363A] border-b-[1px]">
                            <SectionParagraph text="Metamask is a cryptocurrency wallet that we use to interact with the ethereum blockchain. It can be accessed through a browser extension or a mobile, which can then interact with the decentralised application built on top of ethereum. " />
                            <SectionParagraph text="Metamask allows users to manage account keys, broadcast transactions, send and receive ethereum based tokens, and securely connect to decentralised applications." />
                            <SectionParagraph text="For more yet simple explanation, please go through the video below:" />
                            <SectionParagraph text={<a href="https://www.youtube.com/watch?v=YVgfHZMFFFQ" color="blue" >What is MetaMask? - YouTube</a>} />
                            <SectionParagraph text="Now let's learn how we can download MetaMask and get it going:" />
                            <SectionParagraph text={<><p style={{ "marginRight": "2px" }} >Go to</p><a href="https://metamask.io/">The crypto wallet for Defi, Web3 Dapps and NFTs | MetaMask</a></>} />
                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course3} /></div>
                            </div>
                            {/* <ListItems text={<><p className="mr-2">1.</p>
                                <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                            <ListItems text={<><p className="mr-2">2.</p>
                                <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                            <ListItems text={<><p className="mr-2">3.</p>
                                <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                            <InnerSectionH2 text="This is going to be awesome" topmargin="15px" /> */}
                        </div>
                        <div className="border-[#33363A] border-b-[1px]">
                            {/* <SectionParagraph text="Let’s return to the blockchain and see how the data is stored in a blockchain and linked?" />
                            <SectionParagraph text="Suppose you made a transaction on a blockchain network, say on ethereum; how will it be stored in the network?"/>
                            <SectionParagraph text="Looking at the diagram below, we can see a block ( which is basically a collection of data and, in this case, a transaction record ). Each block is linked to a previous block that contains the exact data for some other transaction. Here a block references a block preceding it and together builds up a chain. So as time goes by, it keeps on adding more and more blocks, and the size of the network increases." /> */}

                            {/* <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course2} /></div>
                            </div> */}

                            <SectionParagraph text="Click the Download Button. Metamask will automatically configure your browser. If it doesn’t, try changing your browser to one of the supported browsers." />

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course4} /></div>
                            </div>

                            <SectionParagraph text="After you have installed the MetaMask extension, click on Create New Wallet."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course5} /></div>
                            </div>

                            <SectionParagraph text="Create a password. And hit next. "/>
                            <SectionParagraph text="Now MetaMask provides you a 12 words recovery key, which is not advised to share with anyone as it puts your funds at risk."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course6} /></div>
                            </div>

                            <SectionParagraph text="It is advised to keep your recovery key safe and not share it with anyone."/>
                            <SectionParagraph text="Click Next or Remind Me Later, and you will be prompted to the next screen."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course7} /></div>
                            </div>

                            <SectionParagraph text="Congratulations, now you are officially part of the Ethereum community."/>
                            {/* <InnerSectionH2 text="What will you be building?" topmargin="15px" /> */}
                        </div>
                        {/* <div className="border-[#33363A] border-b-[1px]">
                            <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                            <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                            <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                            <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                            <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                        </div> */}
                        <div className="border-[#33363A] border-b-[1px]"></div>
                    </div>
                    },
                    // {
                    //     name: "Compile contract locally and run it",
                    //     content: <div className="text-green-400">Your text here</div>
                    // },
                    // {
                    //     name: "Deploy smart contract to a real testnet",

                    //     content: <div className="text-green-400">Your text here</div>
                    // },
                    // {
                    //     name: "Connect our wallet to our web app",
                    //     content: <div className="text-green-400">Your text here</div>
                    // },

                ]
            },
            {
                name: "CONSENSUS MECHANISMS",
                sections: [
                    {
                        name: "Consensus Mechanisms",
                        content: <div >
                        <div className="border-[#33363A] border-b-[1px]">
                            <SectionH1 text="Consensus Mechanisms" />
                            <InnerSectionH2 text="Welcome" />
                        </div>
                        <div className="border-[#33363A] border-b-[1px]">
                            <SectionParagraph text="In a traditional centralized system as a bank, a master computer takes care of records and is trusted with the ledger of transactions. The government has set rules that the banks obey, and in this way, we trust the banks and the government with our money." />
                            <SectionParagraph text="But when we deal with untrusted peers sharing a ledger, there is a need to place some rules that will ensure security and provide integrity of the ledger to prevent hacker attacks like double-spending. These rules and agreements are called the consensus mechanisms." />
                            <SectionParagraph text="These rules are set in an open-source environment instead of being developed by a government entity." />
                            <SectionParagraph text="The pool of peers, geographically apart, agree in a decentralized manner to these rules. And any record to store in the network, these peers ( validators ) have to check if it doesn’t violate the laws before pushing to the chain. In this way, the consensus mechanism works. There are many types of consensus mechanisms, but only three are widely accepted as of now, and these are Proof of Work ( PoW ), Proof of Stake ( PoS ), Delegate Proof of Stake (DPoS). On these consensus mechanisms, there will be a detailed chapter later on." />
                            <SectionParagraph text="Conclusion: In here, we discussed what blockchain is and how it works. Along with this, we also compared the traditional centralized system with the decentralized system. Also, some of the terminologies like the validators and their work, consensus mechanism, etc. Blockchain is a revolutionary technology, but it still has a long way to go." />
                            {/* <SectionParagraph text={<><p style={{ "marginRight": "2px" }} >Go to</p><a href="https://metamask.io/">The crypto wallet for Defi, Web3 Dapps and NFTs | MetaMask</a></>} />
                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course3} /></div>
                            </div> */}
                            {/* <ListItems text={<><p className="mr-2">1.</p>
                                <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                            <ListItems text={<><p className="mr-2">2.</p>
                                <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                            <ListItems text={<><p className="mr-2">3.</p>
                                <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                            <InnerSectionH2 text="This is going to be awesome" topmargin="15px" /> */}
                        </div>
                        {/* <div className="border-[#33363A] border-b-[1px]">
                            <SectionParagraph text="Let’s return to the blockchain and see how the data is stored in a blockchain and linked?" />
                            <SectionParagraph text="Suppose you made a transaction on a blockchain network, say on ethereum; how will it be stored in the network?"/>
                            <SectionParagraph text="Looking at the diagram below, we can see a block ( which is basically a collection of data and, in this case, a transaction record ). Each block is linked to a previous block that contains the exact data for some other transaction. Here a block references a block preceding it and together builds up a chain. So as time goes by, it keeps on adding more and more blocks, and the size of the network increases." />

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course2} /></div>
                            </div>

                            <SectionParagraph text="Click the Download Button. Metamask will automatically configure your browser. If it doesn’t, try changing your browser to one of the supported browsers." />

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course4} /></div>
                            </div>

                            <SectionParagraph text="After you have installed the MetaMask extension, click on Create New Wallet."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course5} /></div>
                            </div>

                            <SectionParagraph text="Create a password. And hit next. "/>
                            <SectionParagraph text="Now MetaMask provides you a 12 words recovery key, which is not advised to share with anyone as it puts your funds at risk."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course6} /></div>
                            </div>

                            <SectionParagraph text="It is advised to keep your recovery key safe and not share it with anyone."/>
                            <SectionParagraph text="Click Next or Remind Me Later, and you will be prompted to the next screen."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course7} /></div>
                            </div>

                            <SectionParagraph text="Congratulations, now you are officially part of the Ethereum community."/>
                            <InnerSectionH2 text="What will you be building?" topmargin="15px" />
                        </div> */}
                        {/* <div className="border-[#33363A] border-b-[1px]">
                            <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                            <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                            <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                            <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                            <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                        </div> */}
                        <div className="border-[#33363A] border-b-[1px]"></div>
                    </div>
                    },

                    {
                        name: "Consensus Protocols",
                        content: <div >
                        <div className="border-[#33363A] border-b-[1px]">
                            <SectionH1 text="Consensus Protocols" />
                            <InnerSectionH2 text="Welcome" />
                        </div>
                        <div className="border-[#33363A] border-b-[1px]">
                            <SectionParagraph text="In the last chapter, we discuss the basics of blockchain technology. Now we have a clear definition that it’s distributed ledger that provides immutability, security, and privacy." />
                            <SectionParagraph text="Since it’s decetralized in nature, that means there is no any entity that looks after the transaction and verifies it like a bank, and if no one is looking over the transactions, how does it ensure security and privacy. It’s because of the consesnus protocols. All the nodes in the blockchain agree upon a set of rules, and following those rules and regulations a new block is added and ensured that the block which has been added is new and one of kind in the whole blockchain network. " />
                            <SectionParagraph text="These set of rules are known as the consensus protocol." />
                            <SectionParagraph text="A consensus algorithm/protocol is procedure by which all the peers come to an agreement about the present state of the blockchain. In this way, consensus algorithm achieves reliability in the blockchain network and establishes trust between unknown peers in a distribute computing environment.  " />
                            <SectionParagraph text="As of now there are many different types of consensus protocols but only 2 - 3 are widely accepted. " />
                                <ListItems text={<><p className="mr-2">1.</p>
                                    <p><span className="font-semibold">Proof of Work (PoW)</span></p></>} />
                                <ListItems text={<><p className="mr-2">2.</p>
                                    <p><span className="font-semibold">Proof of Stake (PoS)</span></p></>} />
                                <ListItems text={<><p className="mr-2">3.</p>
                                <p><span className="font-semibold">Delegate Proof of Stake (DPos)</span></p></>} />

                            {/* <SectionParagraph text={<><p style={{ "marginRight": "2px" }} >Go to</p><a href="https://metamask.io/">The crypto wallet for Defi, Web3 Dapps and NFTs | MetaMask</a></>} />
                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course3} /></div>
                            </div> */}
                            {/* <ListItems text={<><p className="mr-2">1.</p>
                                <p><span className="font-semibold">Connect your Discord in the project dashboard. </span> All the good stuff is going to be happening in a secret category in the Discord that you'll only have access to if you connect your Discord.Be sure to attend the kick-off. If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                            <ListItems text={<><p className="mr-2">2.</p>
                                <p><span className="font-semibold">Connect your Ethereum wallet in the project dashboard.</span> If you don't have a wallet that can interact with dApps, you can just install Metamask for free right now. Without a wallet, you can't do the project!</p></>} />
                            <ListItems text={<><p className="mr-2">3.</p>
                                <p><span className="font-semibold">Be sure to attend the kick-off.</span> If you miss it, no worries. It's not required! You'll get an email with the recording. I'll also post the recording in the Discord.</p></>} />
                            <InnerSectionH2 text="This is going to be awesome" topmargin="15px" /> */}
                        </div>
                        <div className="border-[#33363A] border-b-[1px]">
                            <SectionParagraph text="Let’s take them one by one: " />
                            <SectionParagraph text="Proof of Work: A consensus mechanism that is used by the BitCoin."/>
                            <SectionParagraph text="Before we understand Proof-of-Work we need to know what we call as a “Hash Function”. A hash function is a pre-written algorithm which provides us with a random 64 character long, hexadecimal string." />

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course9} /></div>
                            </div>

                            <SectionParagraph text="No matter how long would be the Input ( wether you put “An3” or “ajsndlwnfuqerhfoqASreAqndc35oweofhewpjsqw9” as an input) It will always give 64 character long output with randomly placed characters." />
                            <SectionParagraph text="There are many different kinds of hash functions but which is accepted by the BitCoin fam is SHA256. " />
                            <SectionParagraph text="SHA256 - stands for “ Security Hash Algorithm 256-bit ”. It is one-way function that produces a 64-character long hexadecimal no., when given a input." />
                            <SectionParagraph text="Exercise: find the hash function on the SHA256 calculator to understand SH256 more thoroughly. " />
                            <SectionParagraph text="Note : Hash function are one-way functions, i.e., you get an output on providing it with a n input, but you can’t go backward i.e., you can’t get the original input if you have the output. There is no way to guess the input if you have the result of SHA256." />
                            <SectionParagraph text="No two inputs will have the same output, even a slight difference in the input text will give a completely different hash value. " />
                            <SectionParagraph text="For example: " />
                            
                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course8} /></div>
                            </div>

                            {/* <SectionParagraph text="Now let’s learn about the working of the proof of work:" />
                            <SectionParagraph text="The miner needs to solve a mathematical puzzle, which is basically to find a random number called nonce. The nonce is to be determined under a certain limit. " /> */}

                            {/* <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course2} /></div>
                            </div> */}

                            {/* <SectionParagraph text="Click the Download Button. Metamask will automatically configure your browser. If it doesn’t, try changing your browser to one of the supported browsers." />

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course4} /></div>
                            </div>

                            <SectionParagraph text="After you have installed the MetaMask extension, click on Create New Wallet."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course5} /></div>
                            </div>

                            <SectionParagraph text="Create a password. And hit next. "/>
                            <SectionParagraph text="Now MetaMask provides you a 12 words recovery key, which is not advised to share with anyone as it puts your funds at risk."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course6} /></div>
                            </div>

                            <SectionParagraph text="It is advised to keep your recovery key safe and not share it with anyone."/>
                            <SectionParagraph text="Click Next or Remind Me Later, and you will be prompted to the next screen."/>

                            <div style={{ "display": "flex", "justifyContent": "center" }}>
                                <div style={{ "display": "flex" }} ><img src={Course7} /></div>
                            </div>

                            <SectionParagraph text="Congratulations, now you are officially part of the Ethereum community."/> */}
                            {/* <InnerSectionH2 text="What will you be building?" topmargin="15px" /> */}
                        </div>
                        {/* <div className="border-[#33363A] border-b-[1px]">
                            <SectionParagraph text="I'm really excited to show you how to go from zero -> shipping your own web3 app + Ethereum smart contract." />
                            <SectionParagraph text={<p> You'll be building a website that I'll be calling the WavePortal --- it'll be a place where anyone on the internet can learn a little about who you are and send you a 👋 + a message and have that data saved on the blockchain through an Ethereum smart contract. (A smart contract is basically code that lives on the blockchain you can read and write from, we'll talk about this more in a bit).</p>} />
                            <SectionParagraph text={<p>  You'll be writing + deploying the smart contract and you'll also be building the website that will let people actually connect their wallets and interact with your smart contract.</p>} />
                            <SectionParagraph text={<p>   We're going to make this a little spicy as well. Basically, when someone waves at you there is a random chance they can win a small amount of ETH from your site :).</p>} />
                            <SectionParagraph text={<p>   You'll be able to customize the website as much as you want.  </p>} />

                        </div> */}
                        <div className="border-[#33363A] border-b-[1px]"></div>
                    </div>
                    },

                ]
            },
        ]

    }
]

export default courses;

