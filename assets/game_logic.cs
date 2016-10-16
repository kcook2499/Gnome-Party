using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;
using NDream.AirConsole;
using Newtonsoft.Json.Linq;

public class game_logic : MonoBehaviour
{

#if !DISABLE_AIRCONSOLE

    void Awake() {
        AirConsole.instance.onMessage += OnMessage;
        AirConsole.instance.onConnect += OnConnect;
        //AirConsole.instance.onDisconnect += OnDisconnect;
    }

    void OnConnect(int device_id)
    {

        if (AirConsole.instance.GetActivePlayerDeviceIds.Count == 0)
        {
            if (AirConsole.instance.GetControllerDeviceIds().Count >= 4)
            {
                AirConsole.instance.SetActivePlayers(4);
            }
        }
    }

    void OnMessage(int device_id, JToken data)
    {
    int active_player = AirConsole.instance.ConvertDeviceIdToPlayerNumber(device_id);
        if (active_player != -1)
        {
            if (active_player == 0)
            {
                GameObject player = GameObject.Find("Player1");
                PlayerController playerP = player.GetComponent<PlayerController>();
                playerP.RollDice();
            }
            if (active_player == 1)
            {
                GameObject player = GameObject.Find("Player2");
                PlayerController playerP = player.GetComponent<PlayerController>();
                playerP.RollDice();
            }
            if (active_player == 2)
            {
                GameObject player = GameObject.Find("Player3");
                PlayerController playerP = player.GetComponent<PlayerController>();
                playerP.RollDice();
            }
            if (active_player == 3)
            {
                GameObject player = GameObject.Find("Player4");
                PlayerController playerP = player.GetComponent<PlayerController>();
                playerP.RollDice();
            }
        }
    } 
			     
#endif
}
