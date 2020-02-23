<template>
  <div class="body">
    <div class="box">
      <div class="moe-king">
        <div
          class="avatar-view"
          :class="{ active: moeKing.name !== '虚位以待' }"
          style="width:152px;height:152px;"
        >
          <img
            :src="moeKing.avatar"
            alt=""
            width="146"
            :title="moeKing.name"
            class="avatar"
          />
        </div>
        <div class="role-name" style="width:130px;">
          <span>{{ moeKing.name }}</span>
        </div>
      </div>
      <div class="top">
        <div
          class="group-view"
          style="width:720px;"
          v-for="item in top2"
          :key="item.id"
        >
          <div class="vote-sign">
            <div
              class="div-arc-left"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 0)
              }"
            ></div>
            <div
              class="div-line-left"
              style="width:250px;"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 0)
              }"
            ></div>
            <div
              :class="
                item.status === 2 ? 'div-group-name-active' : 'div-group-name'
              "
              style="left:47%;"
            >
              {{ item.name }}
            </div>
            <div
              class="div-line-right"
              style="width:250px;"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 1)
              }"
            ></div>
            <div
              class="div-arc-right"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 1)
              }"
            ></div>
          </div>
          <div class="flex-between">
            <div
              class="group-cell"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === i)
              }"
              v-for="(v, i) in item.characters"
              style="width:170px;"
              :key="v.id"
            >
              <div class="group-cell-role">
                <div
                  class="avatar-view"
                  :class="{
                    active:
                      item.status === 1 ||
                      (item.status === 2 &&
                        compareVote(item.characters, 'vote_number') === i)
                  }"
                  style="width:126px;height:126px;"
                >
                  <img
                    :src="v.avatar"
                    alt=""
                    width="120"
                    :title="v.name"
                    class="avatar"
                  />
                </div>
                <div class="role-name" style="width:130px;">
                  <span :title="v.name">{{ v.name }}</span>
                </div>
                <div class="vote" style="width:100px;">
                  <div class="vote-number-view" title="票数">
                    <icon name="tend" :w="12" :h="12" color="#f6c259" />
                    <span class="vote-number-text">{{ v.vote_number }}</span>
                  </div>
                  <div class="vote-number-view" title="真爱票数">
                    <icon name="heart-fill" :w="12" :h="12" color="#e66457" />
                    <span class="love-number-text">{{ v.love_number }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top">
        <div
          class="group-view"
          style="width:450px;"
          v-for="item in top4"
          :key="item.id"
        >
          <div class="vote-sign">
            <div
              class="div-arc-left"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 0)
              }"
            ></div>
            <div
              class="div-line-left"
              style="width:120px;"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 0)
              }"
            ></div>
            <div
              :class="
                item.status === 2 ? 'div-group-name-active' : 'div-group-name'
              "
              style="left:46%;"
            >
              {{ item.name }}
            </div>
            <div
              class="div-line-right"
              style="width:120px;"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 1)
              }"
            ></div>
            <div
              class="div-arc-right"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 1)
              }"
            ></div>
          </div>
          <div class="flex-between">
            <div
              class="group-cell"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === i)
              }"
              v-for="(v, i) in item.characters"
              style="width:170px;"
              :key="v.id"
            >
              <div class="group-cell-role">
                <div
                  class="avatar-view"
                  :class="{
                    active:
                      item.status === 1 ||
                      (item.status === 2 &&
                        compareVote(item.characters, 'vote_number') === i)
                  }"
                  style="width:126px;height:126px;"
                >
                  <img
                    :src="v.avatar"
                    alt=""
                    width="120"
                    :title="v.name"
                    class="avatar"
                  />
                </div>
                <div class="role-name" style="width:130px;">
                  <span :title="v.name">{{ v.name }}</span>
                </div>
                <div class="vote" style="width:100px;">
                  <div class="vote-number-view" title="票数">
                    <icon name="tend" :w="12" :h="12" color="#f6c259" />
                    <span class="vote-number-text">{{ v.vote_number }}</span>
                  </div>
                  <div class="vote-number-view" title="真爱票数">
                    <icon name="heart-fill" :w="12" :h="12" color="#e66457" />
                    <span class="love-number-text">{{ v.love_number }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top">
        <div class="group-view" v-for="item in top8" :key="item.id">
          <div class="vote-sign">
            <div
              class="div-arc-left"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 0)
              }"
            ></div>
            <div
              class="div-line-left"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 0)
              }"
            ></div>
            <div
              :class="
                item.status === 2 ? 'div-group-name-active' : 'div-group-name'
              "
            >
              {{ item.name }}
            </div>
            <div
              class="div-line-right"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 1)
              }"
            ></div>
            <div
              class="div-arc-right"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === 1)
              }"
            ></div>
          </div>
          <div class="flex-between">
            <div
              class="group-cell"
              :class="{
                active:
                  item.status === 1 ||
                  (item.status === 2 &&
                    compareVote(item.characters, 'vote_number') === i)
              }"
              style="width:110px;"
              v-for="(v, i) in item.characters"
              :key="v.id"
            >
              <div class="group-cell-role">
                <div
                  class="avatar-view"
                  :class="{
                    active:
                      item.status === 1 ||
                      (item.status === 2 &&
                        compareVote(item.characters, 'vote_number') === i)
                  }"
                >
                  <img
                    :src="v.avatar"
                    alt=""
                    width="76"
                    :title="v.name"
                    class="avatar"
                  />
                </div>
                <div class="role-name">
                  <span :title="v.name">{{ v.name }}</span>
                </div>
                <div class="vote">
                  <div class="vote-number-view" title="票数">
                    <icon name="tend" :w="12" :h="12" color="#f6c259" />
                    <span class="vote-number-text">{{ v.vote_number }}</span>
                  </div>
                  <div class="vote-number-view" title="真爱票数">
                    <icon name="heart-fill" :w="12" :h="12" color="#e66457" />
                    <span class="love-number-text">{{ v.love_number }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top" style="margin-top:60px;">
        <div
          class="group-view"
          v-for="item in top34"
          :key="item.id"
          style="width:430px;position:relative;"
        >
          <div class="group-cell">
            <div class="race-name">
              三四名对决
            </div>
            <div
              class="group-cell-role"
              v-for="(v, i) in item.characters"
              :key="v.id"
            >
              <div
                class="avatar-view"
                :class="{
                  active:
                    item.status === 1 ||
                    (item.status === 2 &&
                      compareVote(item.characters, 'vote_number') === i)
                }"
                style="width:126px;height:126px;"
              >
                <img
                  :src="v.avatar"
                  alt=""
                  width="120"
                  :title="v.name"
                  class="avatar"
                />
              </div>
              <div class="role-name" style="width:140px;">
                <span :title="v.name">{{ v.name }}</span>
              </div>
              <div class="vote">
                <div class="vote-number-view" title="票数">
                  <icon name="tend" :w="12" :h="12" color="#f6c259" />
                  <span class="vote-number-text">{{ v.vote_number }}</span>
                </div>
                <div class="vote-number-view" title="真爱票数">
                  <icon name="heart-fill" :w="12" :h="12" color="#e66457" />
                  <span class="love-number-text">{{ v.love_number }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top2: [
        {
          id: 1,
          sex: 1,
          title: "女子组决赛",
          name: "AB",
          status: 0,
          characters: [
            // {
            //   id: 3,
            //   name: "木之本樱",
            //   sex: 1,
            //   order: 0,
            //   avatar: require("../assets/images/a2-1.jpg"),
            //   vote_number: 295945,
            //   love_number: 41976
            // }
            // {
            //   id: 7,
            //   name: "尼禄·克劳狄乌斯",
            //   sex: 1,
            //   order: 1,
            //   avatar: require("../assets/images/b2-1.jpg"),
            //   vote_number: 228590,
            //   love_number: 32823
            // }
          ]
        }
      ],
      top34: [
        {
          id: 1,
          sex: 1,
          title: "女子组三四名对决赛",
          name: "AB-2",
          status: 0,
          characters: [
            // {
            //   id: 1,
            //   name: "远坂凛",
            //   sex: 1,
            //   order: 0,
            //   avatar: require("../assets/images/a1-1.jpg"),
            //   vote_number: 209331,
            //   love_number: 5600
            // },
            // {
            //   id: 5,
            //   name: "薇尔莉特·伊芙加登",
            //   sex: 1,
            //   order: 1,
            //   avatar: require("../assets/images/b1-1.jpg"),
            //   vote_number: 163195,
            //   love_number: 6936
            // }
          ]
        }
      ],
      top4: [
        {
          id: 1,
          sex: 1,
          title: "女子组半决赛",
          name: "A",
          status: 0,
          characters: [
            {
              id: 1,
              name: "远坂凛",
              sex: 1,
              order: 0,
              avatar: require("../assets/images/a1-1.jpg"),
              vote_number: 0, //251403,
              love_number: 0 //34710
            }
            // {
            //   id: 3,
            //   name: "木之本樱",
            //   sex: 1,
            //   order: 1,
            //   avatar: require("../assets/images/a2-1.jpg"),
            //   vote_number: 252586,
            //   love_number: 57137
            // }
          ]
        },
        {
          id: 2,
          sex: 1,
          title: "女子组半决赛",
          name: "B",
          status: 0,
          characters: [
            {
              id: 5,
              name: "薇尔莉特·伊芙加登",
              sex: 1,
              order: 0,
              avatar: require("../assets/images/b1-1.jpg"),
              vote_number: 0, //173627,
              love_number: 0 //16254
            }
            // {
            //   id: 7,
            //   name: "尼禄·克劳狄乌斯",
            //   sex: 1,
            //   order: 1,
            //   avatar: require("../assets/images/b2-1.jpg"),
            //   vote_number: 175459,
            //   love_number: 7522
            // }
          ]
        }
      ],
      top8: [
        {
          id: 1,
          sex: 1,
          title: "女子组八强",
          name: "A1",
          status: 2,
          characters: [
            {
              id: 1,
              name: "远坂凛",
              sex: 1,
              order: 0,
              avatar: require("../assets/images/a1-1.jpg"),
              vote_number: 142314,
              love_number: 2174
            },
            {
              id: 2,
              name: "间桐樱",
              sex: 1,
              order: 1,
              avatar: require("../assets/images/a1-2.jpg"),
              vote_number: 90499,
              love_number: 4356
            }
          ]
        },
        {
          id: 2,
          sex: 1,
          title: "女子组八强",
          name: "A2",
          status: 1,
          characters: [
            {
              id: 3,
              name: "木之本樱",
              sex: 1,
              order: 0,
              avatar: require("../assets/images/a2-1.jpg"),
              vote_number: 137228,
              love_number: 4603
            },
            {
              id: 4,
              name: "贞德",
              sex: 1,
              order: 1,
              avatar: require("../assets/images/a2-2.png"),
              vote_number: 121282,
              love_number: 3089
            }
          ]
        },
        {
          id: 3,
          sex: 1,
          title: "女子组八强",
          name: "B1",
          status: 2,
          characters: [
            {
              id: 5,
              name: "薇尔莉特·伊芙加登",
              sex: 1,
              order: 0,
              avatar: require("../assets/images/b1-1.jpg"),
              vote_number: 138273,
              love_number: 2415
            },
            {
              id: 6,
              name: "土间埋",
              sex: 1,
              order: 1,
              avatar: require("../assets/images/b1-2.png"),
              vote_number: 110530,
              love_number: 2482
            }
          ]
        },
        {
          id: 4,
          sex: 1,
          title: "女子组八强",
          name: "B2",
          status: 1,
          characters: [
            {
              id: 7,
              name: "尼禄·克劳狄乌斯",
              sex: 1,
              order: 0,
              avatar: require("../assets/images/b2-1.jpg"),
              vote_number: 123301,
              love_number: 2941
            },
            {
              id: 8,
              name: "伊莉雅丝菲尔·冯·爱因兹贝伦",
              sex: 1,
              order: 1,
              avatar: require("../assets/images/b2-2.png"),
              vote_number: 119391,
              love_number: 3063
            }
          ]
        }
      ]
    };
  },
  created() {
    this.addData(this.top2);
    this.addData(this.top34);
    this.addData(this.top4);
    this.addData(this.top8);
  },
  computed: {
    moeKing() {
      let result = {
        name: "虚位以待",
        avatar: require("../assets/images/default_user.jpg")
      };
      if (this.top2[0].status === 2) {
        const index = this.compareVote(this.top2[0].characters, "vote_number");
        result = this.top2[0].characters[index];
      }
      return result;
    }
  },
  methods: {
    compareVote(data, name) {
      const max = Math.max(...data.map(v => v[name]));
      return data.findIndex(v => v[name] === max);
    },
    addData(data) {
      data.forEach(v => {
        switch (v.characters.length) {
          case 0:
            v.characters = [
              {
                id: new Date().getTime(),
                name: "虚位以待",
                avatar: require("../assets/images/default_user.jpg"),
                order: 0,
                vote_number: 0,
                love_number: 0
              },
              {
                id: new Date().getTime() + 1,
                name: "虚位以待",
                avatar: require("../assets/images/default_user.jpg"),
                order: 0,
                vote_number: 0,
                love_number: 0
              }
            ];
            break;
          case 1:
            v.characters = [
              ...v.characters,
              ...[
                {
                  id: new Date().getTime(),
                  name: "虚位以待",
                  avatar: require("../assets/images/default_user.jpg"),
                  order: v.characters[0].order === 1 ? 0 : 1,
                  vote_number: 0,
                  love_number: 0
                }
              ]
            ].sort((a, b) => a.order - b.order);
            break;
          case 2:
            break;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  background: rgb(34, 34, 34);
  min-height: 2000px;
  padding-top: 200px;
}
.box {
  margin: 0 auto;
  width: 1120px;
  .top {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
  }
}
.group-view {
  width: 240px;
  .group-cell {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
    padding-bottom: 5px;
    border-radius: 18px;
    border: 1px solid #f7ddf1;
    cursor: pointer;
    &.active {
      background: linear-gradient(
        0deg,
        rgba(89, 92, 117, 0.3),
        rgba(69, 6, 187, 0.3)
      );
    }
  }
  .group-cell-role {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.role-name {
  margin: 5px 0;
  text-align: center;
  line-height: 25px;
  color: #fff;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}
.race-name {
  position: absolute;
  top: 30%;
  left: 47.5%;
  color: #fff;
  width: 24px;
  border-radius: 18px;
  background: linear-gradient(0deg, #e66457, #f6c259);
  padding: 8px 5px;
}
.moe-king {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.vote {
  text-align: left;
  font-size: 14px;
  .vote-number-view {
    width: 70px;
    margin: 5px;
    .vote-number-text {
      display: inline-block;
      margin-left: 5px;
      color: #f6c259;
    }
    .love-number-text {
      display: inline-block;
      margin-left: 5px;
      color: #e66457;
    }
  }
}
.avatar-view {
  width: 82px;
  height: 82px;
  border: 2px solid #464345;
  border-radius: 13px;
  font-size: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar {
    border-radius: 10px;
    // border: 1px solid #e8e8ee;
  }
  &.active {
    border: 2px solid #e66457;
  }
}
.vote-sign {
  display: flex;
  justify-content: center;
  position: relative;
  .div-arc-left {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-left-color: #464345;
    transform: rotate(45deg);
    &.active {
      border-left-color: #ff6666;
    }
  }
  .div-arc-right {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-right-color: #464345;
    transform: rotate(-45deg);
    &.active {
      border-right-color: #ff6666;
    }
  }
  .div-line-left {
    margin-left: -20px;
    width: 50px;
    height: 38px;
    border-top: 2px solid #464345;
    &.active {
      border-top: 2px solid #ff6666;
    }
  }
  .div-line-right {
    margin-right: -20px;
    width: 50px;
    height: 38px;
    border-top: 2px solid #464345;
    &.active {
      border-top: 2px solid #ff6666;
    }
  }
  .div-group-name-active {
    position: absolute;
    top: -10px;
    left: 42%;
    width: 40px;
    height: 20px;
    border-radius: 8px;
    background-color: #a024a0;
    color: #fff;
    font-weight: bold;
    text-align: center;
    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      width: 2px;
      height: 10px;
      background-color: #ff6666;
    }
  }
  .div-group-name {
    position: absolute;
    top: -10px;
    left: 42%;
    width: 40px;
    height: 20px;
    border-radius: 8px;
    background-color: #a024a0;
    color: #fff;
    font-weight: bold;
    text-align: center;
    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      width: 2px;
      height: 10px;
      background-color: #464345;
    }
  }
}
</style>
