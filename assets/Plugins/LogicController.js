#pragma strict

public var playerPrefab: GameObject;
public var turnNumber : int = 1;
public var turnFullTotal : int = 0;

function Start ()
{
	for (var i : int = 1; i < 5; i++)
	{
		var newPlayer = Instantiate(playerPrefab, transform.position + Vector3.back*0.5 + Vector3.forward*i*0.25 + Vector3.left + Vector3.right*i*0.5, transform.rotation);
		newPlayer.name = "Player"+i;
		var newPlayerController = newPlayer.GetComponent(PlayerController);
		newPlayerController.playerNumber = i;
	}
	var playerObject = GameObject.Find("Player1");
	var playerObjectController = playerObject.GetComponent(PlayerController);
	playerObjectController.StartTurn();
	
	var cameraObject = GameObject.Find("Main Camera");
	var cameraObjectController = cameraObject.GetComponent(CameraController);
	cameraObjectController.targetObject = GameObject.Find("Player1");
}

function NewPlayer()
{
	if (turnNumber < 4)
	{
		turnNumber++;
	}
	else
	{
		turnNumber = 1;
		turnFullTotal++;
		if (turnFullTotal == 10)
			EndGame();
	}
	
	var cameraObject = GameObject.Find("Main Camera");
	var cameraObjectController = cameraObject.GetComponent(CameraController);

	if (turnNumber == 1)
		cameraObjectController.targetObject = GameObject.Find("Player1");
	if (turnNumber == 2)
		cameraObjectController.targetObject = GameObject.Find("Player2");
	if (turnNumber == 3)
		cameraObjectController.targetObject = GameObject.Find("Player3");
	if (turnNumber == 4)
		cameraObjectController.targetObject = GameObject.Find("Player4");
	
	var playerObjectController = cameraObjectController.targetObject.GetComponent(PlayerController);
	playerObjectController.StartTurn();
}
function EndGame()
{
	
}