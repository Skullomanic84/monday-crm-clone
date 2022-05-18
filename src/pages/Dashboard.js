//pages import
import TicketCard from "../components/TicketCard"

const Dashboard = () => {

    const tickets = [
        {
            category: 'paper chase',
            color: 'red',
            title: 'NFT Safety 101 video',
            owner: 'papa react',
            avatar: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/247699174_10223089463679576_8805042926756024560_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeG0kbw2qWj7yCOdd3-KzWIaUIAcLAU2-SRQgBwsBTb5JELbnGV2jXuoV612z3TRz7s&_nc_ohc=mETAXMN5qSkAX-5Atxt&_nc_oc=AQlQZaBRkSm4K0qlWcC9XuAq5KtTv0ZNuaMf9w_u0hbuxQpJ3uWkgpHzEMTmw44b3Vo&_nc_ht=scontent-jnb1-1.xx&oh=00_AT91Dqlq1nM1Kv6KE1x5MHIYN06yan-vG69oh4JbTQt8zA&oe=628A1DAE',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'how to make NFT safe and how to tell the fake ones',
            timestamp: '2022-02-18T07:36:17+0000'
        },
        {
            category: 'money heist',
            color: 'red',
            title: 'financial fredom video',
            owner: 'papa react',
            avatar: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/247699174_10223089463679576_8805042926756024560_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeG0kbw2qWj7yCOdd3-KzWIaUIAcLAU2-SRQgBwsBTb5JELbnGV2jXuoV612z3TRz7s&_nc_ohc=mETAXMN5qSkAX-5Atxt&_nc_oc=AQlQZaBRkSm4K0qlWcC9XuAq5KtTv0ZNuaMf9w_u0hbuxQpJ3uWkgpHzEMTmw44b3Vo&_nc_ht=scontent-jnb1-1.xx&oh=00_AT91Dqlq1nM1Kv6KE1x5MHIYN06yan-vG69oh4JbTQt8zA&oe=628A1DAE',
            status: 'working on it',
            priority: 2,
            progress: 70,
            description: 'make a video about finance',
            timestamp: '2022-02-25T07:36:17+0000'
        },

    ]

    const colors = [
      'rgb(255,179,186)',
      'rgb(255,223,186)',
      'rgb(255,255,186)',
      'rgb(186,255,201)',
      'rgb(186,225,255)',
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

    return (
        <div className="dashboard">
        <h1>My Projects</h1>
        <div className="ticket-container">
          {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex}>
                <h3>{uniqueCategory}</h3>
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      color={colors[categoryIndex] || colors[0]}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            ))}
        </div>
      </div>
    )
}

export default Dashboard