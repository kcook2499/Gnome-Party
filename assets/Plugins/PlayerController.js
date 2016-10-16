#pragma strict

public var dicePrefab: GameObject;
public var coinImage : Texture2D;
public var style : GUIStyle;
public var playerNumber : int = 0;
public var rollNumber : int = 0;
public var rolledNumber : int = 0;
public var coinAmount = 5;

private var coins: int = 0;

private var moveDirection : Vector3 = Vector3.zero;
private var positionTo : Vector3 = Vector3.zero;

function Start ()
{
	coinAmount = 5;
}

function StartTurn ()
{
	Instantiate(dicePrefab, transform.position + Vector3.up*2.5, Quaternion.identity);
}

function Update ()
{
	if (Input.GetKeyDown ("up"))
	{
		RollDice();
	}
	if (Vector3.Distance(transform.position,positionTo) < 0.01)
	{
			moveDirection = Vector3.down * 0.01;
	}
	transform.Translate(moveDirection);
}

function EndTurn()
{
	var logicObject = GameObject.Find("Logic");
	var logicObjectController = logicObject.GetComponent(LogicController);
	moveDirection = Vector3.zero;
	positionTo = transform.position + Vector3.right * 0.2;
	logicObjectController.NewPlayer();
	rollNumber --;
	print(coinAmount.ToString());
}

function RollDice ()
{
	var logicObject = GameObject.Find("Logic");
	var logicObjectController = logicObject.GetComponent(LogicController);
	if (GameObject.Find("Dice(Clone)") != null)
			if (playerNumber == logicObjectController.turnNumber)
				moveDirection = Vector3.up * 0.1;
}

function OnTriggerEnter (col : Collider)
{
	if(col.gameObject.tag == "Space")
    {
        moveDirection = Vector3.zero;
		transform.position.y = 0.6;
		var space = col.gameObject;
		transform.rotation = space.transform.rotation;
		
		if (rollNumber > 0)
		{
			positionTo = transform.position + transform.rotation * Vector3.right * 4;
			moveDirection = Vector3.right * 0.1;
			rollNumber --;
		}
		else
		{
			var spaceType = col.gameObject.name;
			if (spaceType == ("SpaceRed"))
				coinAmount -= 5;
			else
				coinAmount += 3;
			EndTurn();
		}
    }
	if(col.gameObject.tag == "Dice")
    {
		var dice = col.gameObject;
		var diceController = dice.GetComponent(DiceController);
		moveDirection = Vector3.down * 0.1;
		diceController.keepUpdating = false;
		rollNumber = diceController.diceNumber;
		rolledNumber = diceController.diceNumber;
		Destroy(dice);
    }
}

function OnGUI ()
{
	if (this.name == "Player1")
	{
		GUI.Label(Rect(0, 0, 70, 30), "Player 1:", style);
		GUI.DrawTexture(new Rect(70, 0, 90, 30), coinImage, ScaleMode.ScaleToFit, true);
		GUI.Label(Rect(130, 0, 50, 30), coinAmount.ToString(), style);
	}
	if (this.name == "Player2")
	{
		GUI.Label(Rect(0, 30, 70, 30), "Player 2:", style);
		GUI.DrawTexture(new Rect(70, 30, 90, 30), coinImage, ScaleMode.ScaleToFit, true);
		GUI.Label(Rect(130, 30, 50, 30), coinAmount.ToString(), style);
	}
	if (this.name == "Player3")
	{
		GUI.Label(Rect(Screen.width-170, 0, 70, 30), "Player 3:", style);
		GUI.DrawTexture(new Rect(Screen.width-100, 0, 90, 30), coinImage, ScaleMode.ScaleToFit, true);
		GUI.Label(Rect(Screen.width-40, 0, 50, 30), coinAmount.ToString(), style);
	}
	if (this.name == "Player4")
	{
		GUI.Label(Rect(Screen.width-170, 30, 70, 30), "Player 4:", style);
		GUI.DrawTexture(new Rect(Screen.width-100, 30, 90, 30), coinImage, ScaleMode.ScaleToFit, true);
		GUI.Label(Rect(Screen.width-40, 30, 50, 30), coinAmount.ToString(), style);
	}
}